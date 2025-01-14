// controllers/farmController.js
const Farm = require('../models/Farm');

// @desc    Create a new farm
// @route   POST /api/farms
// @access  Private
exports.createFarm = async (req, res) => {
  try {
    const farm = await Farm.create(req.body);
    res.status(201).json({ success: true, data: farm });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get all farms
// @route   GET /api/farms
// @access  Private
exports.getFarms = async (req, res) => {
  try {
    const farms = await Farm.find();
    res.status(200).json({ success: true, data: farms });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get single farm
// @route   GET /api/farms/:id
// @access  Private
exports.getFarm = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);

    if (!farm) {
      return res.status(404).json({ success: false, error: 'Farm not found' });
    }

    res.status(200).json({ success: true, data: farm });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update farm
// @route   PUT /api/farms/:id
// @access  Private
exports.updateFarm = async (req, res) => {
  try {
    const farm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!farm) {
      return res.status(404).json({ success: false, error: 'Farm not found' });
    }

    res.status(200).json({ success: true, data: farm });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete farm
// @route   DELETE /api/farms/:id
// @access  Private
exports.deleteFarm = async (req, res) => {
  try {
    const farm = await Farm.findByIdAndDelete(req.params.id);

    if (!farm) {
      return res.status(404).json({ success: false, error: 'Farm not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

