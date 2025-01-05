const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the task
  completed: { type: Boolean, default: false }, // Completion status
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model('Task', TaskSchema);
