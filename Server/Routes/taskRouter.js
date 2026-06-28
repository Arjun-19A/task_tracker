const express = require("express");

const taskRouter = express.Router();

const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");


// GET /api/tasks => Get all tasks
taskRouter.get("/", getTasks);

// GET /api/tasks/:id => Get single task
taskRouter.get("/:id", getTask);

// POST /api/tasks => Create new task
taskRouter.post("/", createTask);

// PUT /api/tasks/:id => Update task
taskRouter.put("/:id", updateTask);

// DELETE /api/tasks/:id => Delete task
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;