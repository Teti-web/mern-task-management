module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  verbose: true,
  testMatch: ["<rootDir>/src/**/*_test_/**/*.test.(ts|tsx|js|jsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
