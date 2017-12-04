const path = require('path')
const webpack = require('webpack')
const validator = require('webpack-validator');

module.exports = {
  context: __dirname,
  entry: {
    path: path.join(__dirname, 'src',  'index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }
}
