import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default defineConfig([
  globalIgnores(['node_modules/', 'dist/', 'src/']),

  {
    extends: ['js/all'],
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
  },

  eslintConfigPrettier,
]);
