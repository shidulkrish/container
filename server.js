const express = require('express');
const app = express();
const PORT = process.size || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a GET endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello! Your Express server is running.',
    status: 'success'
  });
});

// Define another sample API endpoint
app.get('/api/greeting', (req, res) => {
  res.json({ greeting: 'Welcome to the Express API endpoint!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

