import express from "express";
import cors from "cors";
import http from "http";

import { authRoutes } from "./routes/auth.routes.js";
import { userRoutes } from "./routes/user.routes.js";
import { friendRoutes } from "./routes/friends.routes.js";
import { matchRoutes } from "./routes/match.routes.js";
import { leaderboardRoutes } from "./routes/leaderboard.routes.js";
import { setupWebSocket } from "./websocket.js";
import { ApiError } from "./utils/ApiError.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.get("/", (_req, res) => {
  res.send("Bingo API is running");
});

app.use((err, req, res, _next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
      type: err.errorType,
    });
  }
  console.error(err);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const server = http.createServer(app);
setupWebSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
