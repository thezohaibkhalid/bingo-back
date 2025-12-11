import { WebSocketServer } from "ws";
import prisma from "./prismaClient.js";

const userSockets = new Map();

function addSocket(userId, ws) {
  if (!userSockets.has(userId)) {
    userSockets.set(userId, new Set());
  }
  userSockets.get(userId).add(ws);
}

function removeSocket(userId, ws) {
  const set = userSockets.get(userId);
  if (!set) return;
  set.delete(ws);
  if (set.size === 0) {
    userSockets.delete(userId);
  }
}

export function sendToUser(userId, event, payload) {
  const set = userSockets.get(userId);
  if (!set) return;
  const message = JSON.stringify({ event, payload });
  for (const ws of set) {
    if (ws.readyState === ws.OPEN) {
      ws.send(message);
    }
  }
}

export function broadcastToUsers(userIds, event, payload) {
  const message = JSON.stringify({ event, payload });
  for (const userId of userIds) {
    const set = userSockets.get(userId);
    if (!set) continue;
    for (const ws of set) {
      if (ws.readyState === ws.OPEN) {
        ws.send(message);
      }
    }
  }
}

export function setupWebSocket(server) {
  const wss = new WebSocketServer({
    server,
    path: "/ws",
  });

  wss.on("connection", async (ws, req) => {
    try {
      const url = new URL(req.url, "http://localhost");
      const token = url.searchParams.get("token");
      if (!token) {
        ws.close();
        return;
      }

      const session = await prisma.session.findUnique({
        where: { token },
        include: { user: true },
      });

      if (!session || session.expiresAt < new Date()) {
        ws.close();
        return;
      }

      const userId = session.userId;
      ws.userId = userId;
      addSocket(userId, ws);

      ws.on("close", () => {
        removeSocket(userId, ws);
      });

      ws.on("error", () => {
        removeSocket(userId, ws);
      });
    } catch {
      ws.close();
    }
  });
}
