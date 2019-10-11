const express = require('express');

const Resources = require('../knex-models/resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.post('/', (req, res) => {
  const schemeData = req.body;

  Resources.add(schemeData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});

module.exports = router;