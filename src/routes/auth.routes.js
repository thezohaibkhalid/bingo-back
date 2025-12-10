import express from "express";
import { me } from "../controllers/auth.controller.js";

const router = express.Router();
console.log("authRoutes");
router.get("/me", me);

export { router as authRoutes };

