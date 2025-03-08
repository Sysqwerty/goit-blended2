import { Router } from "express";
import * as c from "../controllers/productsControllers.js";
import { auth } from "../middleware/auth.js";

const productsRouter = Router();

productsRouter.use(auth);

productsRouter.get("/", c.getAllProducts);

productsRouter.post("/", c.addProduct);

export default productsRouter;
