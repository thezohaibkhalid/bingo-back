import express from "express";
import { register, login, verifyOtp, me } from "../controllers/auth.controllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.get("/me", requireAuth, me);

export { router as authRoutes };
