const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const farmRoutes = require('./routes/farmRoutes');
const financialRoutes = require('./routes/financialRoutes');

dotenv.config();
const app = express();
