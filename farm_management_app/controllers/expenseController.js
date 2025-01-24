const asyncHandler = require('express-async-handler'); // Import asyncHandler
const Expense = require('../models/Expense'); // Adjust path if necessary

// @desc    Get all expenses
// @route   GET /api/expenses
// @access  Private
exports.getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id });

  res.status(200).json(expenses);
});

// @desc    Add a new expense
// @route   POST /api/expenses
// @access  Private
exports.addExpense = asyncHandler(async (req, res) => {
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    res.status(400);
    throw new Error('All fields are required');
  }

  const expense = await Expense.create({
    user: req.user._id,
    title,
    amount,
    category,
  });

  res.status(201).json(expense);
});

// @desc    Delete an expense
// @route   DELETE /api/expenses/:id
// @access  Private
exports.deleteExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404);
    throw new Error('Expense not found');
  }

  if (expense.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await expense.remove();

  res.status(200).json({ message: 'Expense deleted' });
});
