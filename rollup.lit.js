import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'lit-html/index.js',
  plugins: [
    resolve({module: true}),
    babel({presets: ["@babel/preset-env"]}),
    uglify()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    file: 'test/rollup/lit.js',
    format: 'iife'
  }
};
