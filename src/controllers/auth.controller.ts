import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from "../prismaClient.js"
import type { Request, Response } from "express"
import { fromNodeHeaders } from "better-auth/node"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"

export const auth = betterAuth({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    secret: process.env.BETTER_AUTH_SECRET,

    database: prismaAdapter(prisma, {
        provider: "postgresql",

    }),

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    }
})

export const me = asyncHandler(async (req:Request, res:Response) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if (!session) {
        throw new ApiError(401, "Unauthorized", [], "Unauthorized");
    } 
    return new ApiResponse(200, 
        {
            id: session.user.id,
            email: session.user.email,
            display_name: session.user.name,
            avatar_url: session.user.image,
            created_at: session.user.createdAt,
          }
        , true, "Session fetched successfully");
})