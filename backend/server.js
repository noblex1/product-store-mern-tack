//Import the dotenv dep to load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Import express
import express from 'express';

// Get the express app instance
const app = express();


// create a request handler for the root route
app.get('/', (req, res)=> {
    res.send('Hello from the backend server!');
});

app.get('/users', (req, res) =>{
    res.json([
        {id: 1, name: 'Okasha'},
        {id: 1, name: 'Mrgem'}
    ]);
});

const PORT = process.env.PORT || 5000;

// Start the server 
app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
})