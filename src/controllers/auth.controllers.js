import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import {
  hashPassword,
  comparePassword,
  generateOtpCode,
  hashOtpCode,
  generateSessionToken,
} from "../utils/authUtils.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST /api/auth/register
export const register = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new ApiError(400, "Email already in use");
  }

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      name,
      displayName: name,
    },
  });

  return new ApiResponse(
    201,
    {
      id: user.id,
      email: user.email,
      display_name: user.displayName ?? user.name,
    },
    true,
    "User registered",
  );
});

// POST /api/auth/login
// Step 1: check email+password, send OTP, return otpId
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isValid = await comparePassword(password, user.passwordHash);
  if (!isValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // generate OTP
  const code = generateOtpCode();
  const codeHash = hashOtpCode(code);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

  const otp = await prisma.emailOtp.create({
    data: {
      userId: user.id,
      codeHash,
      purpose: "login_2fa",
      expiresAt,
    },
  });

  // send email
  await transporter.sendMail({
    from: process.env.SMTP_FROM || "no-reply@bingo-game.com",
    to: user.email,
    subject: "Your Bingo login code",
    text: `Your login code is: ${code}`,
  });

  return new ApiResponse(
    200,
    { otpId: otp.id },
    true,
    "OTP sent to email",
  );
});

// POST /api/auth/verify-otp
// Step 2: user sends { otpId, code } → we create session
export const verifyOtp = asyncHandler(async (req, res) => {
  const { otpId, code } = req.body;

  if (!otpId || !code) {
    throw new ApiError(400, "otpId and code are required");
  }

  const otp = await prisma.emailOtp.findUnique({
    where: { id: otpId },
    include: { user: true },
  });

  if (!otp) {
    throw new ApiError(400, "Invalid OTP");
  }

  if (otp.consumedAt) {
    throw new ApiError(400, "OTP already used");
  }

  if (otp.expiresAt < new Date()) {
    throw new ApiError(400, "OTP expired");
  }

  const codeHash = hashOtpCode(code);
  if (codeHash !== otp.codeHash) {
    throw new ApiError(400, "Invalid OTP code");
  }

  // mark OTP consumed
  await prisma.emailOtp.update({
    where: { id: otp.id },
    data: { consumedAt: new Date() },
  });

  // create session
  const token = generateSessionToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await prisma.session.create({
    data: {
      token,
      userId: otp.userId,
      expiresAt,
    },
  });

  const user = otp.user;

  return new ApiResponse(
    200,
    {
      token,
      user: {
        id: user.id,
        email: user.email,
        display_name: user.displayName ?? user.name,
        avatar_url: user.avatarUrl ?? user.image,
        created_at: user.createdAt,
      },
    },
    true,
    "Login successful",
  );
});

// GET /api/auth/me
export const me = asyncHandler(async (req, res) => {
  // requireAuth must run before this
  const user = req.user;

  if (!user) {
    throw new ApiError(401, "Unauthorized");
  }

  return new ApiResponse(
    200,
    {
      id: user.id,
      email: user.email,
      display_name: user.displayName ?? user.name,
      avatar_url: user.avatarUrl ?? user.image,
      created_at: user.createdAt,
    },
    true,
    "Session fetched successfully",
  );
});
