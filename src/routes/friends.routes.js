import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import {
  sendFriendRequest,
  listFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  listFriends,
} from "../controllers/friends.contollers.js";
const router = express.Router();

// POST /api/friends/requests
router.post("/requests", requireAuth, sendFriendRequest);

// GET /api/friends/requests
router.get("/requests", requireAuth, listFriendRequests);

// POST /api/friends/requests/:id/accept
router.post("/requests/:id/accept", requireAuth, acceptFriendRequest);

// POST /api/friends/requests/:id/reject
router.post("/requests/:id/reject", requireAuth, rejectFriendRequest);

// GET /api/friends
router.get("/", requireAuth, listFriends);

export { router as friendRoutes };
