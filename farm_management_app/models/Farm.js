const mongoose = require('mongoose');

const FarmSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a farm name']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  landArea: {
    type: Number,
    required: [true, 'Please add the land area']
  },
  crops: [{
    type: String
  }],
  livestock: [{
    type: String
  }],
  resources: [{
    type: String
  }],
  equipment: [{
    type: String
  }],
  labor: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Farm', FarmSchema);

