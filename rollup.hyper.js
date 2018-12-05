import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'hyperhtml/index.js',
  plugins: [
    resolve({module: true}),
    babel({presets: ["@babel/preset-env"]}),
    uglify()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    file: 'test/rollup/hyper.js',
    format: 'iife'
  }
};
