import express from "express";
import type { Request, Response } from "express";
import { toNodeHandler, fromNodeHeaders } from "better-auth/node";
import cors from "cors";
import { auth } from "./controllers/auth.controller.js"
const app = express();

const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)
app.use(express.json())


// mounting better auth routes for /api/auth/*
app.all("/api/auth/*", toNodeHandler(auth))

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

