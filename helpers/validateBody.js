import * as s from "../services/productService.js";

export const validateBody = (schema, body) => {
    const {error} = schema.validate(body, {abortEarly: false});
    if (error) {
        const newError = new Error(error.message)
        newError.status = 400;
        throw newError;
    }
}