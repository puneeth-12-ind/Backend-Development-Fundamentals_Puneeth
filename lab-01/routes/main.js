const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my first Express server');
});

router.get('/about', (req, res) => {
  res.send({ name: 'Puneeth Sai', section: 'CSE 2D' });
});

router.get('/time', (req, res) => {
  res.send('Current time: ' + new Date());
});

// route parameter: /hello/Ravi
router.get('/hello/:name', (req, res) => {
  res.send('Hello ' + req.params.name);
});

// shows some things from the request object
router.get('/info', (req, res) => {
  res.send({
    method: req.method,
    url: req.url,
    query: req.query
  });
});

// this route throws an error on purpose to test the error handler
router.get('/error', (req, res) => {
  throw new Error('Something went wrong');
});

module.exports = router;
