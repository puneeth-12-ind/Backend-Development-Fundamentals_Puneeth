const express = require('express');
const router = express.Router();

const students = ['Asha', 'Ravi', 'Meena'];

// GET /students  or  /students?name=Ravi
router.get('/', (req, res) => {
  if (req.query.name) {
    const found = students.filter((s) => s === req.query.name);
    res.send(found);
  } else {
    res.send(students);
  }
});

// GET /students/1
router.get('/:id', (req, res) => {
  const student = students[req.params.id];
  if (student) {
    res.send(student);
  } else {
    res.sendStatus(404);
  }
});

// POST /students  (201 = Created)
router.post('/', (req, res) => {
  res.sendStatus(201);
});

// PUT /students/1
router.put('/:id', (req, res) => {
  res.send('Student ' + req.params.id + ' updated');
});

// DELETE /students/1
router.delete('/:id', (req, res) => {
  res.send('Student ' + req.params.id + ' deleted');
});

module.exports = router;
