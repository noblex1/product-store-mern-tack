// import dotenv
import dotenv from 'dotenv';
dotenv.config(); //Load environment variables from .env file

//import mongoose library
import mongoose from 'mongoose'

// server.js
const express = require('express');        // Import Express
const app = express();                     // Create Express app

app.get('/', (req, res) => {              // Define route
  res.json({ 
    message: 'Welcome to our Ecommerce API!',
    status: 'Server is running successfully'
  });
});

const PORT = 5000;                        // Define port
app.listen(PORT, () => {                  // Start server
  console.log(`🚀 Server running on port ${PORT}`);
});
