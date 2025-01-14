const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');
const Farm = require('../models/Farm');

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, priority, dueDate, reminders } = req.body;

  // Find the farm associated with the user
  const farm = await Farm.findById(req.body.farm); 

  if (!farm) {
    res.status(404);
    throw new Error('Farm not found');
  }

  // Create a new task
  const task = await Task.create({
    user: req.user._id, // Assuming user ID is available in req.user (from authentication middleware)
    farm: farm._id, 
    title,
    description,
    priority,
    dueDate,
    reminders,
  });

  res.status(201).json(task);
});

// @desc    Get all tasks for a user
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).populate('farm'); 

  res.status(200).json(tasks);
});

// @desc    Get a single task
// @route   GET /api/tasks/:id
// @access  Private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id); 

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  res.status(200).json(task);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id); 

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Check if the user owns the task
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(updatedTask);
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id); 

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Check if the user owns the task
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await task.remove();

  res.status(200).json({ message: 'Task deleted' });
});

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
