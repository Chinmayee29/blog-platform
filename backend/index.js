const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error.message);
  });

// A simple test route
app.get('/', (req, res) => {
  res.send('Hello from the Blog Platform API!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});