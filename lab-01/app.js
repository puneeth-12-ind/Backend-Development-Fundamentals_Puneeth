const express = require('express');
const app = express();

const mainRoutes = require('./routes/main');
const studentRoutes = require('./routes/students');

// all routes from the routes folder
app.use('/', mainRoutes);
app.use('/students', studentRoutes);

// if no route matched, send 404
app.use((req, res) => {
  res.sendStatus(404);
});

// error handler (has 4 parameters), runs when something throws an error
app.use((err, req, res, next) => {
  console.log('Error: ' + err.message);
  res.sendStatus(500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
