const express = require('express');
const { 
  createFarm, 
  getFarms, 
  getFarm, 
  updateFarm, 
  deleteFarm 
} = require('../controllers/farmController'); 
const { protect } = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.route('/')
  .post(protect, createFarm)
  .get(protect, getFarms); 

router.route('/:id')
  .get(protect, getFarm)
  .put(protect, updateFarm)
  .delete(protect, deleteFarm);

module.exports = router;
