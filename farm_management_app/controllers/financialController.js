// controllers/financialController.js
const Financial = require('../models/Financial');

// @desc    Create a financial record
// @route   POST /api/financials
// @access  Private
exports.createFinancial = async (req, res) => {
  try {
    const financial = await Financial.create(req.body);
    res.status(201).json({ success: true, data: financial });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get all financial records
// @route   GET /api/financials
// @access  Private
exports.getFinancials = async (req, res) => {
  try {
    const financials = await Financial.find();
    res.status(200).json({ success: true, data: financials });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get a single financial record
// @route   GET /api/financials/:id
// @access  Private
exports.getFinancial = async (req, res) => {
  try {
    const financial = await Financial.findById(req.params.id);

    if (!financial) {
      return res.status(404).json({ success: false, error: 'Financial record not found' });
    }

    res.status(200).json({ success: true, data: financial });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update a financial record
// @route   PUT /api/financials/:id
// @access  Private
exports.updateFinancial = async (req, res) => {
  try {
    const financial = await Financial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!financial) {
      return res.status(404).json({ success: false, error: 'Financial record not found' });
    }

    res.status(200).json({ success: true, data: financial });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a financial record
// @route   DELETE /api/financials/:id
// @access  Private
exports.deleteFinancial = async (req, res) => {
  try {
    const financial = await Financial.findByIdAndDelete(req.params.id);

    if (!financial) {
      return res.status(404).json({ success: false, error: 'Financial record not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

