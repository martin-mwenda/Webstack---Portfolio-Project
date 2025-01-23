module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.js'], // Match your test files
  setupFilesAfterEnv: ['./test/setup.js'], // Optional: global test setup file
};
