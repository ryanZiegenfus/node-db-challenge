const express = require('express');

const Tasks = require('../knex-models/tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.post('/', (req, res) => {
  const schemeData = req.body;

  Tasks.add(schemeData)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});

module.exports = router;