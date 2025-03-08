import createError from "http-errors";
import bcrypt from "bcrypt";
import User from "../db/models/User.js";

export const registerUser = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });

  if (user) {
    throw createError(409, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  return User.create({ ...body, password: hashedPassword });
};
