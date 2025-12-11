import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * Map Prisma userStats rows to DTOs the frontend expects
 */
export const mapStatsToDto = (stats, offset) => {
  return stats.map((row, index) => {
    const winRate = row.totalMatches > 0 ? row.wins / row.totalMatches : 0

    return {
      rank: offset + index + 1,
      user_id: row.userId,
      display_name: row.user.displayName || row.user.name,
      avatar_url: row.user.avatarUrl,
      wins: row.wins,
      total_matches: row.totalMatches,
      win_rate: Number(winRate.toFixed(3)),
      best_win_streak: row.bestWinStreak,
      last_match_at: row.lastMatchAt ? row.lastMatchAt.toISOString() : null,
    }
  });
}

/**
 * GET /leaderboard/global?limit=50&offset=0
 */
export const getGlobalLeaderboard = asyncHandler(async (req, res) => {
  try {
    const limitRaw = req.query.limit
    const offsetRaw = req.query.offset

    let limit = parseInt(limitRaw || "50", 10)
    let offset = parseInt(offsetRaw || "0", 10)

    if (Number.isNaN(limit)) limit = 50
    if (Number.isNaN(offset)) offset = 0
    if (limit > 100) limit = 100

    const stats = await prisma.userStats.findMany({
      orderBy: [
        { wins: "desc" },
        { totalMatches: "desc" },
        { lastMatchAt: "desc" },
      ],
      take: limit,
      skip: offset,
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
            name: true,
          },
        },
      },
    })

    const entries = mapStatsToDto(stats, offset)

    return res.json({
      success: true,
      message: "Global leaderboard fetched successfully",
      data: { entries },
    })
  } catch (error) {
    console.error("getGlobalLeaderboard error", error)

    return res.status(500).json({
      success: false,
      message: "Failed to load global leaderboard",
      data: null,
    })
  }
});

/**
 * GET /leaderboard/friends
 * Requires auth middleware that sets req.user.{id}
 */
export const getFriendsLeaderboard = asyncHandler(async (req, res) => {
  try {
    const userId = req.user && req.user.id

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
        data: null,
      })
    }

    const friendships = await prisma.friendship.findMany({
      where: {
        status: "ACCEPTED",
        OR: [{ requesterId: userId }, { addresseeId: userId }],
      },
      select: {
        requesterId: true,
        addresseeId: true,
      },
    })

    const friendIdsSet = new Set()
    friendIdsSet.add(userId) // include self in friends leaderboard

    friendships.forEach((f) => {
      if (f.requesterId !== userId) friendIdsSet.add(f.requesterId)
      if (f.addresseeId !== userId) friendIdsSet.add(f.addresseeId)
    })

    const ids = Array.from(friendIdsSet)

    if (!ids.length) {
      return res.json({
        success: true,
        message: "Friends leaderboard fetched successfully",
        data: { entries: [] },
      })
    }

    const stats = await prisma.userStats.findMany({
      where: { userId: { in: ids } },
      orderBy: [
        { wins: "desc" },
        { totalMatches: "desc" },
        { lastMatchAt: "desc" },
      ],
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
            name: true,
          },
        },
      },
    })

    const entries = mapStatsToDto(stats, 0)

    return res.json({
      success: true,
      message: "Friends leaderboard fetched successfully",
      data: { entries },
    })
  } catch (error) {
    console.error("getFriendsLeaderboard error", error)

    return res.status(500).json({
      success: false,
      message: "Failed to load friends leaderboard",
      data: null,
    })
  }
});
