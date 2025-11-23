module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverage: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/modules/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./jest/tsconfig.json",
    },
  },
};
