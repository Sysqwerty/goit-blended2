import * as s from "../services/productService.js";

export const getAllProductsController = async (req, res) => {
  const products = await s.getAllProducts();
  res.json(products);
};
