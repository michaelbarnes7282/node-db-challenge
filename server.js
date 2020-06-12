const express = require('express');

const projectsRouter = require('./projects/projects-router.js');
const resourcesRouter = require('./resources/resources-router.js')

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter)

module.exports = server;