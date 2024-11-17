const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create app instance
const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies
app.use(cors());  // Enable CORS for cross-origin requests

// MongoDB connection (using MongoDB Atlas or local MongoDB instance)
mongoose.connect('mongodb://localhost/universityDB', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Import routes
const productRoutes = require('./routes/productRoutes');
// You can add more routes like orderRoutes if needed
// const orderRoutes = require('./routes/orderRoutes');

// Use routes
app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes); // Uncomment if you have order routes

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

