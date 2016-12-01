var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
      'webpack-hot-middleware/client',
      './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        // Required for processing parent instatype project
        loader: 'style-loader!css-loader',
        exclude: /(node_modules)/
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        // Required for processing parent instatype project images
        loader: 'url?limit=100000',
        include: [ path.join(__dirname, '..', '..', 'images') ]
      },
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        include: [
          // Run babel on this example and and instatype source.
          // Necessary because we require() instatype source instead of node module.
          path.join(__dirname, 'src'), 
          path.join(__dirname, '..', '..', 'src')
        ]
      }
    ]
  },
  resolve: {
    root: [
      // Find node module directories in this example and parent instatype project.
      path.join(__dirname, 'node_modules'), 
      path.join(__dirname, '..', '..', 'node_modules')
    ]
  }
};