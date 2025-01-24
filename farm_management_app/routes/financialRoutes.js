const express = require('express');
const {
  createFinancial, // Create a financial record
  getFinancials, // Get all financial records
  getFinancial, // Get a single financial record
  updateFinancial, // Update a financial record
  deleteFinancial // Delete a financial record
} = require('../controllers/financialController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new financial record
router.route('/').post(protect, createFinancial); // POST /api/financials

// Get all financial records
router.route('/').get(protect, getFinancials); // GET /api/financials

// Get a specific financial record by ID
router.route('/:id').get(protect, getFinancial); // GET /api/financials/:id

// Update a financial record
router.route('/:id').put(protect, updateFinancial); // PUT /api/financials/:id

// Delete a financial record
router.route('/:id').delete(protect, deleteFinancial); // DELETE /api/financials/:id

module.exports = router;
