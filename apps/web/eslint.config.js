import { nextJsConfig } from '@irikomg/eslint-config/next-js';

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'dist',
      'build',
      'coverage',
    ],
  },
  ...nextJsConfig,
];