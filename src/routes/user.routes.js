import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { searchUsers, getMeProfile } from "../controllers/user.controllers.js";

const router = express.Router();

// GET /api/users/search?query=...
router.get("/search", requireAuth, searchUsers);

// Optional: GET /api/users/me (essentially same as /api/auth/me but via users)
router.get("/me", requireAuth, getMeProfile);

export { router as userRoutes };
