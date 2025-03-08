import { verifyToken } from "../helpers/jwt.js";
import createHttpError from "http-errors";
import { findUserbyId } from "../services/authService.js";

export const auth = async (req, res, next) => {
  try {
    const tokenHeader = req.headers.authorization || "";
    const [bearer, token] = tokenHeader.split(" ");
    if (!bearer || !token) {
      throw createHttpError(401, "Unauthorized");
    }
    const { id } = verifyToken(token);
    if (!id) {
      throw createHttpError(401, "Unauthorized");
    }
    const user = await findUserbyId(id);
    if (!user) {
      throw createHttpError(401, "Unauthorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
