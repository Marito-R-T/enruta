module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    roots: ['<rootDir>/src'],
    transform: {
             "^.+\\.tsx?$": "babel-jest"
           },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };

// module.exports = {
//     testEnvironment: 'node',
//     roots: ['<rootDir>/src'],
//     transform: {
//       '^.+\\.tsx?$': 'ts-jest',
//     },
//     testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   };
  
// module.exports = {
//   testEnvironment: 'jsdom',
//   testMatch: [
//     '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
//     '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
//   ],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

// "jest": {
//   "preset": "ts-jest",
//   "transform": {
//     "^.+\\.tsx?$": "babel-jest"
//   },
//   "testEnvironment": "jsdom",
//   "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
// }