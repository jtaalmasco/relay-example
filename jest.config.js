// @flow strict

// This configuration is merged with the project configuration defined
// in this monorepo root.
module.exports = {
  rootDir: __dirname,
  testMatch: ['<rootDir>/**/__tests__/**/?(*.)+(spec|test).js?(x)'], // @x-shipit-enable
  // @x-shipit-disable: transform: { '^.+\\.js$': '<rootDir>/scripts/jest/custom-transformer.js' },
};
