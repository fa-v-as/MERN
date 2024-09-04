const express = require('express');
const mongodb = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
