import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

// Helper: validate a board numbers array (1-25, unique, length 25)
function validateBoardNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length !== 25) {
    throw new ApiError(400, "Board must have exactly 25 numbers");
  }

  const seen = new Set();
  for (const n of numbers) {
    if (typeof n !== "number" || n < 1 || n > 25) {
      throw new ApiError(400, "Board numbers must be integers between 1 and 25");
    }
    if (seen.has(n)) {
      throw new ApiError(400, "Board numbers must be unique");
    }
    seen.add(n);
  }
}

// Helper: compute lines for a board given moves
// boardNumbers: Int[25], movesSet: Set(numbers that were selected)
function computeLines(boardNumbers, movesSet) {
  const size = 5;
  const marked = Array(25).fill(false);

  boardNumbers.forEach((num, idx) => {
    if (movesSet.has(num)) {
      marked[idx] = true;
    }
  });

  let lines = 0;

  // rows
  for (let r = 0; r < size; r++) {
    let ok = true;
    for (let c = 0; c < size; c++) {
      if (!marked[r * size + c]) {
        ok = false;
        break;
      }
    }
    if (ok) lines++;
  }

  // cols
  for (let c = 0; c < size; c++) {
    let ok = true;
    for (let r = 0; r < size; r++) {
      if (!marked[r * size + c]) {
        ok = false;
        break;
      }
    }
    if (ok) lines++;
  }

  // main diag
  {
    let ok = true;
    for (let i = 0; i < size; i++) {
      if (!marked[i * size + i]) {
        ok = false;
        break;
      }
    }
    if (ok) lines++;
  }

  // anti diag
  {
    let ok = true;
    for (let i = 0; i < size; i++) {
      if (!marked[i * size + (size - 1 - i)]) {
        ok = false;
        break;
      }
    }
    if (ok) lines++;
  }

  return lines;
}

// ───────────────────────────────────
// Controllers
// ───────────────────────────────────

// POST /api/matches/invite
export const inviteMatch = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { friend_id } = req.body;

  if (!friend_id) {
    throw new ApiError(400, "friend_id is required");
  }
  if (friend_id === userId) {
    throw new ApiError(400, "Cannot invite yourself");
  }

  // Optional: ensure they are friends
  const friendship = await prisma.friendship.findFirst({
    where: {
      status: "ACCEPTED",
      OR: [
        { requesterId: userId, addresseeId: friend_id },
        { requesterId: friend_id, addresseeId: userId },
      ],
    },
  });

  if (!friendship) {
    throw new ApiError(400, "You can only invite accepted friends");
  }

  const match = await prisma.match.create({
    data: {
      player1Id: userId,
      player2Id: friend_id,
      status: "INVITED",
    },
  });

  return new ApiResponse(201, match, true, "Match invitation created");
});

// GET /api/matches
export const listMatches = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const matches = await prisma.match.findMany({
    where: {
      OR: [{ player1Id: userId }, { player2Id: userId }],
    },
    orderBy: { createdAt: "desc" },
  });

  return new ApiResponse(200, matches, true, "Matches fetched successfully");
});

// GET /api/matches/:matchId
export const getMatchById = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      player1: true,
      player2: true,
    },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player1Id !== userId && match.player2Id !== userId) {
    throw new ApiError(403, "You are not part of this match");
  }

  const result = {
    id: match.id,
    status: match.status,
    current_turn_user_id: match.currentTurnUserId,
    winner_user_id: match.winnerUserId,
    player1: {
      id: match.player1.id,
      display_name: match.player1.displayName ?? match.player1.name,
    },
    player2: {
      id: match.player2.id,
      display_name: match.player2.displayName ?? match.player2.name,
    },
    created_at: match.createdAt,
    started_at: match.startedAt,
    ended_at: match.endedAt,
  };

  return new ApiResponse(200, result, true, "Match fetched");
});

// POST /api/matches/:matchId/accept
export const acceptMatchInvite = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player2Id !== userId) {
    throw new ApiError(403, "Only invitee can accept the match");
  }

  if (match.status !== "INVITED") {
    throw new ApiError(400, "Match is not in invited state");
  }

  const updated = await prisma.match.update({
    where: { id: matchId },
    data: {
      status: "BOARD_SETUP",
    },
  });

  return new ApiResponse(200, updated, true, "Match invitation accepted");
});

// POST /api/matches/:matchId/board
export const setBoard = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;
  const { mode, numbers } = req.body;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: { boards: true },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player1Id !== userId && match.player2Id !== userId) {
    throw new ApiError(403, "You are not part of this match");
  }

  if (match.status !== "BOARD_SETUP" && match.status !== "INVITED") {
    throw new ApiError(400, "Cannot set board in current match state");
  }

  let boardNumbers = numbers;

  if (mode === "straight") {
    boardNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  }

  if (!Array.isArray(boardNumbers)) {
    throw new ApiError(400, "numbers array is required (or use mode='straight')");
  }

  validateBoardNumbers(boardNumbers);

  // upsert board for this user in this match
  const board = await prisma.board.upsert({
    where: {
      matchId_userId: { matchId, userId },
    },
    update: {
      numbers: boardNumbers,
    },
    create: {
      matchId,
      userId,
      numbers: boardNumbers,
    },
  });

  // After saving board, check if both players have boards
  const player1Board = match.boards.find((b) => b.userId === match.player1Id);
  const player2Board = match.boards.find((b) => b.userId === match.player2Id);
  const nowHasPlayer1Board = player1Board || (userId === match.player1Id ? board : null);
  const nowHasPlayer2Board = player2Board || (userId === match.player2Id ? board : null);

  let updatedMatch = match;

  if (nowHasPlayer1Board && nowHasPlayer2Board && match.status !== "IN_PROGRESS") {
    // choose random starting player
    const startingUserId =
      Math.random() < 0.5 ? match.player1Id : match.player2Id;

    updatedMatch = await prisma.match.update({
      where: { id: matchId },
      data: {
        status: "IN_PROGRESS",
        startedAt: new Date(),
        currentTurnUserId: startingUserId,
      },
    });
  }

  return new ApiResponse(
    201,
    {
      board,
      match: updatedMatch,
    },
    true,
    "Board set successfully",
  );
});

// GET /api/matches/:matchId/state
export const getMatchState = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      player1: true,
      player2: true,
      boards: true,
      moves: {
        orderBy: { moveNumber: "asc" },
      },
    },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player1Id !== userId && match.player2Id !== userId) {
    throw new ApiError(403, "You are not part of this match");
  }

  const yourBoard = match.boards.find((b) => b.userId === userId);
  const opponentBoard = match.boards.find(
    (b) => b.userId !== userId,
  );

  const movesSet = new Set(match.moves.map((m) => m.number));

  const yourLines = yourBoard ? computeLines(yourBoard.numbers, movesSet) : 0;
  const opponentLines = opponentBoard
    ? computeLines(opponentBoard.numbers, movesSet)
    : 0;

  const response = {
    match: {
      id: match.id,
      status: match.status,
      current_turn_user_id: match.currentTurnUserId,
      winner_user_id: match.winnerUserId,
    },
    players: [
      {
        id: match.player1.id,
        display_name: match.player1.displayName ?? match.player1.name,
      },
      {
        id: match.player2.id,
        display_name: match.player2.displayName ?? match.player2.name,
      },
    ],
    your_board: yourBoard
      ? {
          numbers: yourBoard.numbers,
          size: 5,
        }
      : null,
    moves: match.moves.map((m) => ({
      move_number: m.moveNumber,
      number: m.number,
      chosen_by_user_id: m.chosenByUserId,
    })),
    your_lines: yourLines,
    opponent_lines: opponentLines,
  };

  return new ApiResponse(200, response, true, "Match state fetched");
});

// POST /api/matches/:matchId/move
export const makeMove = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;
  const { number } = req.body;

  if (typeof number !== "number") {
    throw new ApiError(400, "number is required and must be numeric");
  }
  if (number < 1 || number > 25) {
    throw new ApiError(400, "number must be between 1 and 25");
  }

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      boards: true,
      moves: true,
    },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player1Id !== userId && match.player2Id !== userId) {
    throw new ApiError(403, "You are not part of this match");
  }

  if (match.status !== "IN_PROGRESS") {
    throw new ApiError(400, "Match is not in progress");
  }

  if (match.currentTurnUserId !== userId) {
    throw new ApiError(400, "It is not your turn");
  }

  // ensure number not already used
  const existingMove = match.moves.find((m) => m.number === number);
  if (existingMove) {
    throw new ApiError(400, "Number already selected in this match");
  }

  const nextMoveNumber = (match.moves.length || 0) + 1;

  const createdMove = await prisma.move.create({
    data: {
      matchId,
      moveNumber: nextMoveNumber,
      chosenByUserId: userId,
      number,
    },
  });

  // recompute lines (optional — we can compute here or in state)
  const movesSet = new Set([...match.moves.map((m) => m.number), number]);

  const yourBoard = match.boards.find((b) => b.userId === userId);
  const opponentBoard = match.boards.find(
    (b) => b.userId !== userId,
  );

  const yourLines = yourBoard ? computeLines(yourBoard.numbers, movesSet) : 0;
  const opponentLines = opponentBoard
    ? computeLines(opponentBoard.numbers, movesSet)
    : 0;

  // switch turn
  const nextTurnUserId =
    userId === match.player1Id ? match.player2Id : match.player1Id;

  await prisma.match.update({
    where: { id: matchId },
    data: {
      currentTurnUserId: nextTurnUserId,
    },
  });

  return new ApiResponse(
    200,
    {
      success: true,
      move: {
        move_number: createdMove.moveNumber,
        number: createdMove.number,
        chosen_by_user_id: createdMove.chosenByUserId,
      },
      your_lines: yourLines,
      opponent_lines: opponentLines,
      next_turn_user_id: nextTurnUserId,
    },
    true,
    "Move recorded",
  );
});

// POST /api/matches/:matchId/bingo
export const claimBingo = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { matchId } = req.params;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      boards: true,
      moves: true,
    },
  });

  if (!match) {
    throw new ApiError(404, "Match not found");
  }

  if (match.player1Id !== userId && match.player2Id !== userId) {
    throw new ApiError(403, "You are not part of this match");
  }

  if (match.status !== "IN_PROGRESS") {
    throw new ApiError(400, "Match is not in progress");
  }

  if (match.winnerUserId) {
    // someone already won
    const alreadyWinner = match.winnerUserId === userId;
    return new ApiResponse(
      200,
      {
        success: alreadyWinner,
        lines: null,
        is_winner: alreadyWinner,
        reason: "Match already has a winner",
      },
      true,
      "Bingo claim checked",
    );
  }

  const yourBoard = match.boards.find((b) => b.userId === userId);

  if (!yourBoard) {
    throw new ApiError(400, "You do not have a board set up");
  }

  const movesSet = new Set(match.moves.map((m) => m.number));
  const lines = computeLines(yourBoard.numbers, movesSet);

  if (lines >= 5) {
    await prisma.match.update({
      where: { id: matchId },
      data: {
        winnerUserId: userId,
        status: "FINISHED",
        endedAt: new Date(),
      },
    });

    return new ApiResponse(
      200,
      {
        success: true,
        lines,
        is_winner: true,
      },
      true,
      "Bingo! You won the match",
    );
  } else {
    return new ApiResponse(
      200,
      {
        success: false,
        lines,
        is_winner: false,
        reason: "Not enough lines",
      },
      true,
      "Bingo claim rejected",
    );
  }
});
