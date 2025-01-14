const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  itemName: {
    type: String,
    required: [true, 'Please add an item name']
  },
  category: {
    type: String,
    enum: ['Seed', 'Fertilizer', 'Feed', 'Equipment', 'Produce', 'Livestock'],
    required: true
  },
  quantity: {
    type: Number,
    required: [true, 'Please add quantity']
  },
  unit: {
    type: String,
    required: [true, 'Please specify unit of measurement']
  },
  purchaseDate: {
    type: Date
  },
  expiryDate: {
    type: Date
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', InventorySchema);

