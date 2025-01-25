const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const farmRoutes = require('./routes/farmRoutes');
const financialRoutes = require('./routes/financialRoutes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./dbConnection'); // Import your MongoDB connection function

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// MongoDB Connection (using native MongoDB driver)
connectToDB(); // Connect to MongoDB using your custom connection function

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/financials', financialRoutes);

// Error handling middleware
app.use(errorHandler);

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  process.exit(0);
});

const PORT = process.env.PORT || 5000;

// Define a route for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Farm Management App!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
