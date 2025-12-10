import express from "express";
import cors from "cors";

import { authRoutes } from "./routes/auth.routes.js";
import { userRoutes } from "./routes/user.routes.js";
import { friendRoutes } from "./routes/friends.routes.js";
import { matchRoutes } from "./routes/match.routes.js";

const app = express();
const port = process.env.PORT || 3000;

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

app.get("/", (_req, res) => {
  res.send("Bingo API is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
