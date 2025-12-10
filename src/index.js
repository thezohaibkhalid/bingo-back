import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import auth from "./lib/auth.js";
import { authRoutes } from "./routes/auth.routes.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({  
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  }),
);
// Mount custom auth routes FIRST (before Better Auth)
// This ensures routes like /api/auth/me are handled by our custom routes
app.use("/api/auth", authRoutes);

// Mount Better Auth handler - handles all other /api/auth/* routes
// This includes /api/auth/sign-in/social for Google OAuth
// Must come AFTER custom routes so Express matches custom routes first
app.use("/api/auth", toNodeHandler(auth));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

