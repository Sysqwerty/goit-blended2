import { Router } from "express";
import { ctrlWrapper } from "../wrappers/controllerWrapper.js";
import * as c from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", ctrlWrapper(c.registerUser));
authRouter.post("/login", ctrlWrapper(c.loginUser));

export default authRouter;
