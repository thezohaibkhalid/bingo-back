import { fromNodeHeaders } from "better-auth/node";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import auth from "../lib/auth.js";

export const me = asyncHandler(async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    throw new ApiError(401, "Unauthorized", [], "Unauthorized");
  }

  return new ApiResponse(
    200,
    {
      id: session.user.id,
      email: session.user.email,
      display_name: session.user.name,
      avatar_url: session.user.image,
      created_at: session.user.createdAt,
    },
    true,
    "Session fetched successfully",
  );
});

