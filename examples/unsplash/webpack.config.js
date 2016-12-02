var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var common = {
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  }
};

var development = {
  devtool: 'eval',
  entry: [
      'webpack-hot-middleware/client',
      './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      // Make require('instatype') resolve to src (not node module) ...
      // ... so that we can work on instatype with hot reloading.
      'instatype': path.join(__dirname, '..', '..', 'src', 'js', 'app.js')
    },
    root: [
      // Find node module directories in this example and parent instatype project.
      path.join(__dirname, 'node_modules'), 
      path.join(__dirname, '..', '..', 'node_modules')
    ]
  },
  // Because we make require('instatype') resolve to src ...
  // ... we need to include loaders used by instatype's webpack.config.js
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader',
        include: [ path.join(__dirname, '..', '..', 'src') ]
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=100000',
        include: [ path.join(__dirname, '..', '..', 'images') ]
      },
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        include: [ 
          path.join(__dirname, 'src'),
          path.join(__dirname, '..', '..', 'src') 
        ]
      }
    ]
  }
}

var production = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['babel'], 
        include: path.join(__dirname, 'src')
      }
    ]
  }
}

switch(process.env.NODE_ENV) {
  case 'production':
    var config = merge(common, production);
    break;
  default:
    var config = merge(common, development);
}


module.exports = config;
