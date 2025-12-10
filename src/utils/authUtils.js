import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function hashPassword(plain) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function comparePassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

export function generateOtpCode() {
  // 6-digit numeric code
  return (Math.floor(100000 + Math.random() * 900000)).toString();
}

export function hashOtpCode(code) {
  return crypto.createHash("sha256").update(code).digest("hex");
}

export function generateSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}
