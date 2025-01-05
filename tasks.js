const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from MongoDB
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    completed: req.body.completed || false,
  });

  try {
    const newTask = await task.save(); // Save task to MongoDB
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id); // Delete task from MongoDB
    res.status(204).end(); // No content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
