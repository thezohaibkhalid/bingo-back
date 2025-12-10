import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import auth from "./lib/auth.js";

import { authRoutes } from "./routes/auth.routes.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({  
    origin: "http://localhost:5173",
    credentials: true,
  }),
);




// mounting better auth routes for /api/auth/*
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

