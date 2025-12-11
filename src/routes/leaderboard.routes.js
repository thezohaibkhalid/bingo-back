import express from "express"
import { requireAuth } from "../middleware/requireAuth.js"
import {
  getGlobalLeaderboard,
  getFriendsLeaderboard,
} from "../controllers/leaderboard.controllers.js"

const router = express.Router()

// GET /leaderboard/global?limit=50&offset=0
router.get("/global", requireAuth, getGlobalLeaderboard)

// GET /leaderboard/friends
router.get("/friends", requireAuth, getFriendsLeaderboard)

export { router as leaderboardRoutes }
