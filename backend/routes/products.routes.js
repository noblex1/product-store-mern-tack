// Import express to create the router
import express from 'express';
// Create a new router for product routes
const productRouter = express.Router();

// Import product controller functions
import{
    getAllProducts,
    getProductById,
    createProducts,
    deleteProducts,
    updateProcutsById
}from "../controllers/product.controller.js"
// ...existing code...


// Route to get all products
productRouter.get("/", getAllProducts);

// Route to get a product by ID (should be "/:id" instead of "/")
productRouter.get("/", getProductById); 

// Route to create a new product
productRouter.post("/", createProducts);

// Route to update a product by ID
productRouter.put("/:id", updateProcutsById);

// Route to delete a product by ID
productRouter.delete("/:id", deleteProducts);

// Export the product router for use in the app
export default productRouter;