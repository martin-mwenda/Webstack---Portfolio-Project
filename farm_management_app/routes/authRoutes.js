const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/userController').registerUser;

router.post('/register', registerUser); // Using the registerUser function as the callback

module.exports = router;
