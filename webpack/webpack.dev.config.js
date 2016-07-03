const webpack = require('webpack');
const config = require('./webpack.config.js');
const CarteBlanche = require('carte-blanche');
const ReactPlugin = require('carte-blanche-react-plugin');

const devConfig = {
  devtool: 'inline-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ].concat(config.entry),

  output: { ...config.output, publicPath: 'http://localhost:8080/' },

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CarteBlanche({
      componentRoot: './src/components/dumb',
      dest: 'compos',
      plugins: [
        new ReactPlugin({
          files: ['../node_modules/babel-polyfill/dist/polyfill.min.js'],
        }),
      ]
    })
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = devConfig;
