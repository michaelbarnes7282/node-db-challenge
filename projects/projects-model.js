const db = require('../data/db-config.js');

function getProjects() {
    return db("projects")
}

function add(projectData) {
    return db('projects')
        .insert(projectData)
}

function addTask(taskData) {
    return db('tasks')
        .insert(taskData)
}

function getTasks(id) {
    return db("projects as p")
    .join("tasks as t", "t.project_id", "p.id")
    .where("p.id", id)
    .select("p.name", "p.desc as project description", "t.desc", "t.notes")
}

module.exports = {
    getProjects,
    add,
    addTask,
    getTasks
}