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
  getActiveMatchWithFriend,
} from "../controllers/match.controllers.js";

const router = express.Router();

router.post("/invite", requireAuth, inviteMatch);
router.get("/", requireAuth, listMatches);
router.get("/active-with/:friendId", requireAuth, getActiveMatchWithFriend);
router.get("/:matchId", requireAuth, getMatchById);
router.post("/:matchId/accept", requireAuth, acceptMatchInvite);
router.post("/:matchId/board", requireAuth, setBoard);
router.get("/:matchId/state", requireAuth, getMatchState);
router.post("/:matchId/move", requireAuth, makeMove);
router.post("/:matchId/bingo", requireAuth, claimBingo);

export { router as matchRoutes };
