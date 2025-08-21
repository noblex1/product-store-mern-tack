// Import mongoose to define the product schema and model
import mongoose from "mongoose";

// Define the schema for a product
const productSchema = new mongoose.Schema(
  {
    // Product name: required, max length 50 characters
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    // Product price: must be a non-negative number, default is 0
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    // Image URL for the product: required
    imageUrl: {
      type: String,
      required: true,
    },
    // Stock quantity: required, must be non-negative, default is 0
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    // Product description: required
    description: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create and export the Product model based on the schema
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
