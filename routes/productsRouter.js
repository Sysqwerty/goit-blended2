import express from "express";
import { getAllProductsController } from "../controllers/productsControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", getAllProductsController);

export default productsRouter;
