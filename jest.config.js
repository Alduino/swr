module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '/test/.*\\.test\\.tsx?$',
  modulePathIgnorePatterns: ['<rootDir>/examples/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    '^swr$': '<rootDir>/swr',
    '^swr/infinite$': '<rootDir>/swr/infinite/index.ts',
    '^swr/immutable$': '<rootDir>/swr/immutable/index.ts'
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc-node/jest',
      {
        jsc: {
          minify: false
        }
      }
    ]
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/test/'],
  coverageReporters: ['text', 'html']
}
