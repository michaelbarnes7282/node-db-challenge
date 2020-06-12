const express = require('express');

const rm = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    rm.get()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources.' })
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    rm.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to post resource.' })
    })
})

module.exports = router;