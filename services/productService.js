import Product from "../db/models/Product.js";

export const getAllProducts = async () => {
  return await Product.findAll();
};

export default { getAllProducts };
