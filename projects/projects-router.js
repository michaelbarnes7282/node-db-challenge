const express = require('express');

const pm = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    pm.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects.' })
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    pm.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
    })
})

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskData = req.body;
    taskData.project_id = id;

    pm.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new task.' })
    })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    pm.getTasks(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks.' })
    })
})

module.exports = router;