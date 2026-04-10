import express from 'express';



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Basic Express API!' });
});

// Use route middleware


// Error handling middleware (must be last)


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
