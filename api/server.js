const express = require('express');

const ProjectsRouter = require('../routers/projects-router');
const TasksRouter = require('../routers/tasks-router');
const ResourcesRouter = require('../routers/resources-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);


module.exports = server;