import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const searchUsers = asyncHandler(async (req, res) => {
  const query = (req.query.query || "").toString().trim();
  const currentUserId = req.user.id;

  if (!query) {
    // You can return empty list or all users; for now: empty
    return new ApiResponse(200, [], true, "Empty query, no users returned");
  }

  const users = await prisma.user.findMany({
    where: {
      id: { not: currentUserId }, // don't include self
      OR: [
        { displayName: { contains: query, mode: "insensitive" } },
        { name: { contains: query, mode: "insensitive" } },
        { email: { contains: query, mode: "insensitive" } },
      ],
    },
    take: 25,
    select: {
      id: true,
      displayName: true,
      name: true,
      avatarUrl: true,
      image: true,
    },
  });

  const result = users.map((u) => ({
    id: u.id,
    display_name: u.displayName ?? u.name,
    avatar_url: u.avatarUrl ?? u.image,
  }));

  return new ApiResponse(200, result, true, "Users fetched successfully");
});

export const getMeProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  return new ApiResponse(
    200,
    {
      id: user.id,
      email: user.email,
      display_name: user.displayName ?? user.name,
      avatar_url: user.avatarUrl ?? user.image,
      created_at: user.createdAt,
    },
    true,
    "Profile fetched successfully",
  );
});
