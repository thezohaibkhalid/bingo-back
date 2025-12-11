import prisma from "../prismaClient.js"

export const ensureUserStats = async (userId) => {
  return prisma.userStats.upsert({
    where: { userId },
    create: { userId },
    update: {},
  })
}

export const applyMatchResultToStats = async (matchId) => {
  const match = await prisma.match.findUnique({
    where: { id: matchId },
  })

  if (!match) {
    console.warn("[applyMatchResultToStats] match not found:", matchId)
    return
  }

  if (match.status !== "FINISHED" || !match.winnerUserId) {
    console.warn(
      "[applyMatchResultToStats] match not finished or no winner:",
      matchId,
      match.status,
      match.winnerUserId
    )
    return
  }

  const { player1Id, player2Id, winnerUserId, endedAt } = match

  const loserId = winnerUserId === player1Id ? player2Id : player1Id
  const finishedAt = endedAt || new Date()

  await prisma.$transaction(async (tx) => {
    const winnerStats = await tx.userStats.upsert({
      where: { userId: winnerUserId },
      create: { userId: winnerUserId },
      update: {},
    })

    await tx.userStats.upsert({
      where: { userId: loserId },
      create: { userId: loserId },
      update: {},
    })

    const newWinnerStreak = winnerStats.winStreak + 1
    const newBestStreak =
      newWinnerStreak > winnerStats.bestWinStreak
        ? newWinnerStreak
        : winnerStats.bestWinStreak

    await tx.userStats.update({
      where: { userId: winnerUserId },
      data: {
        totalMatches: { increment: 1 },
        wins: { increment: 1 },
        winStreak: newWinnerStreak,
        bestWinStreak: newBestStreak,
        lastMatchAt: finishedAt,
      },
    })

    await tx.userStats.update({
      where: { userId: loserId },
      data: {
        totalMatches: { increment: 1 },
        losses: { increment: 1 },
        winStreak: 0,
        lastMatchAt: finishedAt,
      },
    })
  })
}
