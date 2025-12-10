import prisma from "../prismaClient.js";
import { ApiError } from "../utils/ApiError.js";

export const requireAuth = async (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const [, token] = authHeader.split(" ");

    if (!token) {
      throw new ApiError(401, "Unauthorized", [], "No token provided");
    }

    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) {
      throw new ApiError(401, "Unauthorized", [], "Invalid or expired session");
    }

    req.user = session.user;
    req.session = session;

    next();
  } catch (err) {
    next(err);
  }
};
