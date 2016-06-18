var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      './src/js/app.js'
    ]
  },
  output: {
    path: __dirname + '/build/js/',
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  resolve: {
    // Allow omitting these extensions in require()
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader',
        exclude: /(node_modules)/
      },
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        exclude: /(node_modules)/
      }
    ]
  },
  // Keep these dependencies out of the bundle (parent project should require them)
  externals: {
    'react': 'react',
    'react-dom' : 'react-dom'
  }
};