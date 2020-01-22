module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
