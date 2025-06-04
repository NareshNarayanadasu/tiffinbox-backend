// backend/express.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('TiffinBox backend is running!');
});

// API route example
app.get('/api/menu', (req, res) => {
  res.json([
    { name: 'Veg Thali', items: '2 Rotis, Rice, Dal, Sabzi, Curd' },
    { name: 'South Indian Meal', items: 'Rice, Sambar, Rasam, Veg Curry, Pickle' },
    { name: 'North Indian Meal', items: 'Chapati, Paneer Butter Masala, Dal Makhani, Rice' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
