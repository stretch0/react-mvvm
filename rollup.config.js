import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
const { preserveShebangs } = require('rollup-plugin-preserve-shebangs');

export default {
  input: [
    'src/index.ts'
  ],
  output: {
    file: 'dist/index.js',
    format: 'module',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      exclude: ["**/__tests__", "**/*.test.ts", "test-project"],
      allowSyntheticDefaultImports: true
    }),
    preserveShebangs()
  ]
};