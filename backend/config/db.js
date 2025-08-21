// Import mongoose for MongoDB connection and dotenv for environment variables
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect using the MONGO_URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,      // Use new URL parser
      useUnifiedTopology: true,   // Use new server discovery and monitoring engine
    });

    // Log success message with connected host
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error message and exit process if connection fails
    console.error(`❌ Database connection failed: ${error.message}`);
    process.exit(1);
  }
};

// Export the connectDB function for use in other files
export default connectDB;
