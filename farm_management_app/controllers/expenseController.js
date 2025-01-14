const calculateTotal = require('../utils/calculateTotal');

exports.getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id });
  const totalExpenses = calculateTotal(expenses); 
  res.status(200).json({ expenses, totalExpenses });
});
