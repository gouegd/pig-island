const webpack = require('webpack');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prodConfig = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss') },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = prodConfig;
