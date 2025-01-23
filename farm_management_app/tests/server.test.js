const request = require('supertest'); // For HTTP assertions
const mongoose = require('mongoose'); // To manage database connections
const app = require('./server'); // Import the app

beforeAll(async () => {
  // Connect to MongoDB before running any tests
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Disconnect MongoDB after all tests
  await mongoose.disconnect();
});

describe('API Endpoints', () => {
  test('GET /api/auth should return 200', async () => {
    const response = await request(app).get('/api/auth');
    expect(response.status).toBe(200); // Replace with the actual status expected
  });

  //i will add more
});

