import Joi from "joi";

export const createProductSchema = Joi.object(
    {
        name: Joi.string().min(2).max(64).required(),
        price: Joi.number().min(0).max(1000000).required(),
    }
);

export const updateProductSchema = Joi.object(
    {
        name: Joi.string().min(2).max(64),
        price: Joi.number().min(0).max(1000000),
    }
);