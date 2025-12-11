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
import { validateUsername } from "../utils/usernameUtils.js";
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

export const register = asyncHandler(async (req, res) => {
  const { email, password, username, displayName } = req.body;

  if (!email || !password || !username) {
    throw new ApiError(400, "Email, password and username are required");
  }

  const normalizedUsername = validateUsername(username);
  if (!normalizedUsername) {
    throw new ApiError(
      400,
      "Invalid username. Use 3-30 characters: lowercase letters, numbers, '.', '_' with no spaces"
    );
  }

  const existingByEmail = await prisma.user.findUnique({ where: { email } });
  if (existingByEmail) {
    throw new ApiError(400, "Email already in use");
  }

  const existingByUsername = await prisma.user.findUnique({
    where: { name: normalizedUsername },
  });
  if (existingByUsername) {
    throw new ApiError(400, "Username already in use");
  }

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      name: normalizedUsername,
      displayName: displayName || normalizedUsername,
    },
  });

  return new ApiResponse(
    res,
    201,
    {
      id: user.id,
      email: user.email,
      username: user.name,
      display_name: user.displayName ?? user.name,
    },
    true,
    "User registered",
  );
});

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

  const code = generateOtpCode();
  const codeHash = hashOtpCode(code);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const otp = await prisma.emailOtp.create({
    data: {
      userId: user.id,
      codeHash,
      purpose: "login_2fa",
      expiresAt,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "no-reply@bingo-game.com",
    to: user.email,
    subject: "Your Bingo login code",
    text: `Your login code is: ${code}`,
  });

  return new ApiResponse(
    res,
    200,
    { otpId: otp.id },
    true,
    "OTP sent to email",
  );
});

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

  await prisma.emailOtp.update({
    where: { id: otp.id },
    data: { consumedAt: new Date() },
  });

  const token = generateSessionToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await prisma.session.create({
    data: {
      token,
      userId: otp.userId,
      expiresAt,
    },
  });

  const user = otp.user;

  return new ApiResponse(
    res,
    200,
    {
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.name,
        display_name: user.displayName ?? user.name,
        avatar_url: user.avatarUrl ?? user.image,
        created_at: user.createdAt,
      },
    },
    true,
    "Login successful",
  );
});

export const me = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(401, "Unauthorized");
  }

  return new ApiResponse(
    res,
    200,
    {
      id: user.id,
      email: user.email,
      username: user.name,
      display_name: user.displayName ?? user.name,
      avatar_url: user.avatarUrl ?? user.image,
      created_at: user.createdAt,
    },
    true,
    "Session fetched successfully",
  );
});
