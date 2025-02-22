import * as s from "../services/productService.js";
import { createProductSchema } from "../schemas/productSchemas.js";
import {validateBody} from "../helpers/validateBody.js";


export const getAllProducts = async (req, res) => {
  const products = await s.getAllProducts();
  res.json(products);
};

export const addProduct = async (req, res, next) => {
  try {
    validateBody(createProductSchema, req.body);
    const product = await s.addProduct(req.body);
    res.status(201).json(product)
  }
  catch (error) {
    next(error)
  }


};

