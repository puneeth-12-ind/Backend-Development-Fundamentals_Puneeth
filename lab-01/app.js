// Lab 1: Node.js and Express server
// Name: Puneeth Sai | Reg No: 252U1R1204 | Section: CSE 2D
// Course: Backend Development Fundamentals

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to my first Express server');
});

app.get('/about', (req, res) => {
  res.json({
    name: 'Puneeth Sai',
    section: 'CSE 2D'
  });
});
app.get('/time', (req, res) => {
  res.send('Current date and time: ' + new Date());
});
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

module.exports = app;
