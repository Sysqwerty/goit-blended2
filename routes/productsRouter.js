import express from "express";
import * as c from "../controllers/productsControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", c.getAllProducts);

productsRouter.post("/", c.addProduct)


export default productsRouter;
