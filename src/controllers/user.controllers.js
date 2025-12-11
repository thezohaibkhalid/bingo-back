import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const searchUsers = asyncHandler(async (req, res) => {
  const rawQuery = req.query.query ?? req.query.q;
  const query = (rawQuery || "").toString().trim();

  if (!query) {
    return new ApiResponse(res, 200, [], true, "Empty query, no users returned");
  }

  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: query,
        mode: "insensitive",
      },
    },
    orderBy: {
      name: "asc",
    },
    take: 25,
    select: {
      id: true,
      name: true,
      displayName: true,
      avatarUrl: true,
      image: true,
    },
  });

  const result = users.map((u) => ({
    id: u.id,
    username: u.name,
    display_name: u.displayName ?? u.name,
    avatar_url: u.avatarUrl ?? u.image,
  }));

  return new ApiResponse(res, 200, result, true, "Users fetched successfully");
});

export const getMeProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  return new ApiResponse(
    res,
    200,
    {
      id: user.id,
      email: user.email,
      username: user.name,
      display_name: user.displayName ?? user.name,
      avatar_url: user.avatarUrl ?? user.image,
      created_at: user.createdAt,
    },
    true,
    "Profile fetched successfully",
  );
});

export const checkUsernameAvailability = asyncHandler(async (req, res) => {
  const rawUsername = req.query.username ?? req.query.name;
  const username = (rawUsername || "").toString().trim();

  if (!username) {
    throw new ApiError(400, "username is required");
  }

  const existing = await prisma.user.findUnique({
    where: { name: username },
    select: { id: true },
  });

  const available = !existing;

  return new ApiResponse(
    res,
    200,
    {
      username,
      available,
    },
    true,
    "Username availability checked",
  );
});
