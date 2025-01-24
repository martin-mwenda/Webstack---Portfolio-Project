const express = require('express');
const { getExpenses, addExpense, deleteExpense } = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Expense Routes
router.route('/')
  .get(protect, getExpenses) // Fetch all expenses and calculate total
  .post(protect, addExpense); // Add a new expense

router.route('/:id')
  .delete(protect, deleteExpense); // Delete an expense by ID

module.exports = router;
