const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors()); // Allow requests from different origins
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(morgan('dev')); // Log HTTP requests

// Test route
app.get('/', (req, res) => {
  res.send('Contact Backend is Running!');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, phone, message, agentId } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message || !agentId) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Simulate saving the contact message or sending an email
  console.log('Contact Message Received:', { name, email, phone, message, agentId });

  // Respond with success message
  res.status(200).json({ message: 'Message sent successfully!' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
