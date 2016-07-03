/* eslint-disable global-require */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    path.resolve('src/index.js'),
  ],

  output: {
    path: path.resolve('build'),
    filename: 'app.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('src/index.html'),
      minify: { collapseWhitespace: true },
    }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },

  postcss() {
    return [
      require('autoprefixer')(),
      // require('postcss-import')({ addDependencyTo: webpack }),
      // require('postcss-url')(),
      // require('postcss-cssnext')(),
      // require('postcss-nested')(),
      // // add your 'plugins' here
      // require('postcss-browser-reporter')(),
      // require('postcss-reporter')(),
    ];
  },
};

module.exports = config;
