import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { copy } from 'fs-extra';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    css({
      output: 'styles.css',
      include: ['src/components/css/*.css'],
    }),
    // Temporarily disabled font copying due to file lock issues
    // {
    //   name: 'copy-fonts',
    //   writeBundle() {
    //     return copy('public/MinecraftRegular.ttf', 'dist/MinecraftRegular.ttf', { overwrite: true })
    //       .then(() => copy('public/MinecraftTen.ttf', 'dist/MinecraftTen.ttf', { overwrite: true }));
    //   }
    // }
  ],
  external: ['react', 'react-dom'],
}; 