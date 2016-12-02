var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: __dirname + '/lib/',
    filename: 'instatype.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader',
        include: __dirname + '/src'
      },
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        include: __dirname + '/src'
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg)$/, 
        loader: 'url?limit=100000',
        include: __dirname + '/images'
      }
    ]
  },
  // Keep these dependencies out of the bundle (parent project should require them)
  externals: {
    'react': 'react',
    'react-dom' : 'react-dom'
  }
};