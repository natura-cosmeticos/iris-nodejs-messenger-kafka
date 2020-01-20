module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
