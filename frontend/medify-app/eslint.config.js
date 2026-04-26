const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@angular-eslint': angularEslint,
    },
    rules: {
      ...angularEslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
    },
  },
  prettier,
];