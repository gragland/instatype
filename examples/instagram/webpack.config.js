var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      './src/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      // Resolve require('instatype') to the compiled lib in our root project
      'instatype': path.join(__dirname, '..', '..', 'lib', 'instatype.js'),
    },
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        exclude: /(node_modules)/
      }
    ]
  }
};