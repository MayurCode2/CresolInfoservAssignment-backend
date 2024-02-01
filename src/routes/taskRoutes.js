const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Create a task
router.post('/tasks', taskController.createTask);

// Get all tasks
router.get('/tasks', taskController.getTasks);

// Get a task by ID
router.get('/tasks/:id', taskController.getTaskById);

// Update a task by ID
router.patch('/tasks/:id', taskController.updateTaskById);

// Delete a task by ID
router.delete('/tasks/:id', taskController.deleteTaskById);

// Update the status of a task by ID
router.patch('/tasks/:id/update-status', taskController.updateTaskStatusById);


module.exports = router;
