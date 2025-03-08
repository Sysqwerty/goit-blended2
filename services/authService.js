import createError from "http-errors";
import bcrypt from "bcrypt";
import User from "../db/models/User.js";

export const registerUser = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });

  if (user) {
    throw createError(409, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await User.create({ ...body, password: hashedPassword });
  return newUser;
};

export const verifyUser = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });
  if (!user) {
    return null;
  }
  const isPasswordCompare = await bcrypt.compare(body.password, user.password);
  if (!isPasswordCompare) {
    return null;
  }
  return user;
};

export const updateUser = async (userId, data) => {
  const user = await User.findOne({ where: { id: userId } });

  const updatedUser = await user.update(data, {
    returning: true,
  });

  return updatedUser;
};

export const findUserbyId = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return null;
  }
  return user;
};
