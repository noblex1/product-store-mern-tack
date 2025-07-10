import express from 'express';
const productRouter = express.Router();

import{
    getAllProducts,
    getProductById,
    createProducts,
    deleteProducts,
    updateProcutsById
}from "../controllers/product.controller.js"
import { get } from 'mongoose';


productRouter.get("/", getAllProducts);

productRouter.get("/", getProductById); 

productRouter.post("/", createProducts);

productRouter.put("/:id", updateProcutsById);

productRouter.delete("/:id", deleteProducts);

export default productRouter;