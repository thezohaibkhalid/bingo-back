import prisma from "../src/prismaClient.js"
import { applyMatchResultToStats } from "../src/lib/userStatsService.js"

const run = async () => {
  try {
    const matches = await prisma.match.findMany({
      where: {
        status: "FINISHED",
        winnerUserId: { not: null },
      },
      select: { id: true },
    })

    console.log(`Found ${matches.length} finished matches to backfill`)

    for (const m of matches) {
      console.log("Updating stats for match", m.id)
      await applyMatchResultToStats(m.id)
    }

    console.log("Done backfilling user_stats")
  } catch (err) {
    console.error("Error in backfillUserStats:", err)
  } finally {
    await prisma.$disconnect()
  }
}

run()
