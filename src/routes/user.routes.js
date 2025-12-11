import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import {
  searchUsers,
  getMeProfile,
  checkUsernameAvailability,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/search", requireAuth, searchUsers);
router.get("/me", requireAuth, getMeProfile);
router.get("/username-available", checkUsernameAvailability);

export { router as userRoutes };
