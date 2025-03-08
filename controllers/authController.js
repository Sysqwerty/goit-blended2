import createHttpError from "http-errors";
import { generateToken } from "../helpers/jwt.js";
import * as s from "../services/authService.js";

export const registerUser = async (req, res) => {
  const user = await s.registerUser(req.body);
  res.status(201).json({
    user: {
      email: user.email,
      id: user.id,
    },
  });
};

export const loginUser = async (req, res) => {
  const vefifiedUser = await s.verifyUser(req.body);
  if (!vefifiedUser) {
    throw createHttpError(401, "Email or password is incorrect");
  }
  const token = await generateToken({ id: vefifiedUser.id });
  const user = await s.updateUser(vefifiedUser.id, { token });
  res.status(200).json({
    token: user.token,
    user: {
      email: user.email,
      id: user.id,
    },
  });
};
