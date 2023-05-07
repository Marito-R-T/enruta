// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

module.exports = {
    // ...
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/.next/**',
      '!**/coverage/**',
      '!**/jest.config.js',
    ],
    coverageReporters: ['lcov', 'text', 'clover'],
    coverageDirectory: '<ruta a tu directorio de cobertura>',
  };