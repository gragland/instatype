var webpack = require('webpack');

/* 
  To upgrade to webpack 2:
    - npm install 2.1.0-beta.27 --save-dev
    - Change module.loaders to module.rules
    - Update .babelrc: { "presets": [ ["es2015", { "modules": false }], "react" ] }
*/

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
        loaders: ['babel-loader'], 
        include: __dirname + '/src'
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg)$/, 
        loader: 'url-loader?limit=100000',
        include: __dirname + '/images'
      }
    ]
  },
  // Keep these dependencies out of the bundle (parent project should require them)
  externals: {
    'react': 'react'
  }
};