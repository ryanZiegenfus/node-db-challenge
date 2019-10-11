const express = require('express');

const Projects = require('../knex-models/projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.post('/', (req, res) => {
  const schemeData = req.body;

  Projects.add(schemeData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});

module.exports = router;