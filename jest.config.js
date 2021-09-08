const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { defaults } = require('jest-config');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.(test|spec).(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/interfaces/**', '!**/node_modules/**'],
  coverageReporters: ['text'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
