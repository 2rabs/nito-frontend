module.exports = {
  ignorePatterns: ['*.d.ts'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:astro/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    astroHTML: true,
  },
  plugins: [
    '@typescript-eslint',
    'sort-keys-custom-order',
    'simple-import-sort',
    'import',
    'unused-imports',
    'tailwindcss',
  ],
  rules: {
    'sort-keys-custom-order/object-keys': [
      'error',
      { orderedKeys: ['id', 'name', 'title'] },
    ],
    'sort-keys-custom-order/type-keys': [
      'error',
      { orderedKeys: ['id', 'name', 'title'] },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    tailwindcss: {
      groupByResponsive: true,
      whitelist: [],
    },
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
