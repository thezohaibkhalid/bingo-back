import express from "express"
import {  me } from "../controllers/auth.controller.js"

const router = express.Router()

router.get("/me", me)