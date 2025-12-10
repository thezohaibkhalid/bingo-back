import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const sendFriendRequest = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { addressee_id } = req.body;

  if (!addressee_id) {
    throw new ApiError(400, "addressee_id is required");
  }

  if (addressee_id === userId) {
    throw new ApiError(400, "Cannot send friend request to yourself");
  }

  const targetUser = await prisma.user.findUnique({
    where: { id: addressee_id },
    select: { id: true },
  });

  if (!targetUser) {
    throw new ApiError(404, "User not found");
  }

  // Check existing friendship or request in either direction
  const existing = await prisma.friendship.findFirst({
    where: {
      OR: [
        { requesterId: userId, addresseeId: addressee_id },
        { requesterId: addressee_id, addresseeId: userId },
      ],
    },
  });

  if (existing) {
    throw new ApiError(
      400,
      "Friendship or friend request already exists",
    );
  }

  const friendship = await prisma.friendship.create({
    data: {
      requesterId: userId,
      addresseeId: addressee_id,
      status: "PENDING",
    },
  });

  return new ApiResponse(
    201,
    friendship,
    true,
    "Friend request sent successfully",
  );
});

export const listFriendRequests = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const incoming = await prisma.friendship.findMany({
    where: {
      addresseeId: userId,
      status: "PENDING",
    },
    include: {
      requester: true,
    },
  });

  const outgoing = await prisma.friendship.findMany({
    where: {
      requesterId: userId,
      status: "PENDING",
    },
    include: {
      addressee: true,
    },
  });

  const data = {
    incoming: incoming.map((f) => ({
      id: f.id,
      requester_id: f.requesterId,
      requester_name: f.requester.displayName ?? f.requester.name,
      created_at: f.createdAt,
    })),
    outgoing: outgoing.map((f) => ({
      id: f.id,
      addressee_id: f.addresseeId,
      addressee_name: f.addressee.displayName ?? f.addressee.name,
      created_at: f.createdAt,
    })),
  };

  return new ApiResponse(200, data, true, "Friend requests fetched");
});

export const acceptFriendRequest = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const friendship = await prisma.friendship.findUnique({
    where: { id },
  });

  if (!friendship) {
    throw new ApiError(404, "Friend request not found");
  }

  if (friendship.addresseeId !== userId) {
    throw new ApiError(403, "You are not allowed to accept this request");
  }

  if (friendship.status !== "PENDING") {
    throw new ApiError(400, "Request is not pending");
  }

  await prisma.friendship.update({
    where: { id },
    data: { status: "ACCEPTED" },
  });

  return new ApiResponse(200, { success: true }, true, "Friend request accepted");
});

export const rejectFriendRequest = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const friendship = await prisma.friendship.findUnique({
    where: { id },
  });

  if (!friendship) {
    throw new ApiError(404, "Friend request not found");
  }

  if (friendship.addresseeId !== userId) {
    throw new ApiError(403, "You are not allowed to reject this request");
  }

  if (friendship.status !== "PENDING") {
    throw new ApiError(400, "Request is not pending");
  }

  // either delete or mark BLOCKED; here we delete
  await prisma.friendship.delete({
    where: { id },
  });

  return new ApiResponse(200, { success: true }, true, "Friend request rejected");
});

export const listFriends = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const friendships = await prisma.friendship.findMany({
    where: {
      status: "ACCEPTED",
      OR: [{ requesterId: userId }, { addresseeId: userId }],
    },
    include: {
      requester: true,
      addressee: true,
    },
  });

  const friends = friendships.map((f) => {
    const friend = f.requesterId === userId ? f.addressee : f.requester;

    return {
      id: friend.id,
      display_name: friend.displayName ?? friend.name,
      avatar_url: friend.avatarUrl ?? friend.image,
      last_online_at: friend.lastOnlineAt,
    };
  });

  return new ApiResponse(200, friends, true, "Friends fetched successfully");
});
