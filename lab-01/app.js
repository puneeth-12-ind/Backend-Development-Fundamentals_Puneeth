// Lab 1: Node.js and Express server
// Name: Puneeth Sai | Reg No: 252U1R1204 | Section: CSE 2D
// Course: Backend Development Fundamentals

const express = require('express');
const app = express();

// 1. GET / - Welcome text
app.get('/', (req, res) => {
  res.send('Welcome to my first Express server');
});

// 2. GET /about - JSON with name and section
app.get('/about', (req, res) => {
  res.json({
    name: 'Puneeth Sai',
    section: 'CSE 2D'
  });
});

// 3. GET /time - Current date and time using new Date()
app.get('/time', (req, res) => {
  res.send('Current date and time: ' + new Date());
});

// 4. Return 404 message for any unknown path
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
