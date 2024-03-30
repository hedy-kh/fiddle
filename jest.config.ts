import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  testMatch: ['**/rtl-spec/**/*.spec.*', '**/tests/**/*-spec.{ts,tsx}'],
  resetMocks: true,
  bail: true,
  resetModules: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globalSetup: '<rootDir>/tests/globalSetup.ts',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'], // Add 'mts' to existing extensions
  testPathIgnorePatterns: ['/.tmp/'],
  coverageReporters: ['json', 'html', 'lcov'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.d.ts', '!**/*constants.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/.*\\.(ts|js)$'],
  moduleNameMapper: {
    '.*releases.json$': '<rootDir>/static/releases.json',
    '\\.(css|less|scss)$': '<rootDir>/tests/mocks/styles.ts',
  },
};

export default config;
