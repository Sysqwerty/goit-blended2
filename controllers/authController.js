import * as s from "../services/authService.js";

export const registerUser = async (req, res, next) => {
  const user = await s.registerUser(req.body);

  res.status(201).json({
    user,
  });
};
