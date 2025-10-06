// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// dotenv.config();

// app.use(express.json()); // middleware to parse JSON

// const app = express();
// app.get('/', (req, res) =>{
//     res.send('Hello from the backend server!');
// });


// app.get('/api/products', (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//        {
//       id: 1,
//       name:"Product 1",
//       price: 29.99,
//       description: "This is a great product.",
//       imageUrl: "httpts://via.placeholder.com/150",

//     },
//   ]);
// });

// app.post("/api/products", async (res, req) =>{
//   const newProduct = req.body;

//  try{
//    //validate the product data
//    if(
//     !newProduct.name ||
//     !newProduct.price ||

//    ){
//     return res.status(400).json({
//       message: "All files are required: name, price, description, imageUrl, stock",
//     });
//    }
//  }

//  //create a new product to the database
//  const product = newProductionModel({
//   name: newProduct.name,
//   price: newProduct.price


//  });

//   res.statusCode(201).json({
//     message: "New product created successfully",
//     product: newProduct
//   })
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// Import the dotenv dep to load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import express
import express from "express";
import productRouter from "./routes/products.routes.js";
import cors from 'cors';

// Get the express app instance
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Configure CORS to allow frontend on Render and local dev
const allowedOrigins = [
  process.env.FRONTEND_URL || '',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser clients
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS not allowed for this origin'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
}));
app.use('/api/products', productRouter);


// Create a get request handler for the root route
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

const PORT = process.env.PORT || 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});