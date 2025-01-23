import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base';
import jest from 'eslint-plugin-jest';

export default [
  {
    // Use Airbnb base configuration
    ...airbnb,

    // Set up language options
    languageOptions: {
      ecmaVersion: 2021, // Use ES2021 syntax
      sourceType: 'module', // Enable ECMAScript modules
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        jest: 'readonly', // Enable Jest globals
      },
    },

    // Define environment manually
    environment: {
      browser: false, // Disable browser environment
      jest: true, // Enable Jest environment
    },

    // Add plugins
    plugins: {
      jest,
    },

    // Configure Jest plugin rules
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',

      // General ESLint rules
      'no-console': 'off', // Allow console statements
      'no-shadow': 'off', // Disable shadow variable checks
      'no-restricted-syntax': [
        'error',
        {
          selector: 'WithStatement',
          message: 'Avoid using `with` statements.',
        },
      ],
    },
  },
];
