const express = require('express');
const { 
  addIncome, 
  addExpense, 
  getFarmFinancials, 
  getIncomeReport, 
  getExpenseReport 
} = require('../controllers/financialController'); 
const { protect } = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.route('/income').post(protect, addIncome);
router.route('/expense').post(protect, addExpense); 
router.route('/farm/:farmId/financials').get(protect, getFarmFinancials); 
router.route('/income/report').get(protect, getIncomeReport); 
router.route('/expense/report').get(protect, getExpenseReport); 

module.exports = router;
