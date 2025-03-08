import { Router } from "express";
import * as c from "../controllers/productsControllers.js";

const productsRouter = Router();

productsRouter.get("/", c.getAllProducts);

productsRouter.post("/", c.addProduct);

export default productsRouter;
