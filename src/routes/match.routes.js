import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import {
  inviteMatch,
  listMatches,
  getMatchById,
  acceptMatchInvite,
  setBoard,
  getMatchState,
  makeMove,
  claimBingo,
} from "../controllers/match.controllers.js";

const router = express.Router();

// POST /api/matches/invite
router.post("/invite", requireAuth, inviteMatch);

// GET /api/matches
router.get("/", requireAuth, listMatches);

// GET /api/matches/:matchId
router.get("/:matchId", requireAuth, getMatchById);

// POST /api/matches/:matchId/accept
router.post("/:matchId/accept", requireAuth, acceptMatchInvite);

// POST /api/matches/:matchId/board
router.post("/:matchId/board", requireAuth, setBoard);

// GET /api/matches/:matchId/state
router.get("/:matchId/state", requireAuth, getMatchState);

// POST /api/matches/:matchId/move
router.post("/:matchId/move", requireAuth, makeMove);

// POST /api/matches/:matchId/bingo
router.post("/:matchId/bingo", requireAuth, claimBingo);

export { router as matchRoutes };
