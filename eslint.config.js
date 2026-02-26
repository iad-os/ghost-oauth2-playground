import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const baseIgnores = {
  ignores: [
    'dist/**',
    'node_modules/**',
    'src/routeTree.gen.ts',
    'src/**/*.d.ts',
    'scripts/**/*.d.ts',
  ],
};

const jsConfig = {
  files: ['**/*.{js,jsx,mjs,cjs}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': 'warn',
  },
};

let tsConfig = {
  files: ['**/*.{ts,tsx}'],
  ignores: ['**/*.{ts,tsx}'],
};

try {
  const tsParser = (await import('@typescript-eslint/parser')).default;
  const tsPlugin = (await import('@typescript-eslint/eslint-plugin')).default;

  tsConfig = {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
    },
  };
} catch {
  // Keep ESLint runnable even before TS ESLint deps are installed.
}

export default [baseIgnores, js.configs.recommended, jsConfig, tsConfig];
