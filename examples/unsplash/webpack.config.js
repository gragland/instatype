var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var common = {
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
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
      // We want require('instatype') to map to source js (not node module) ...
      // ... so that we can work on instatype with hot reloading.
      'instatype': path.join(__dirname, '..', '..', 'src', 'js', 'app.js')
    }
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
  ]
}


switch(process.env.NODE_ENV) {
  case 'production':
    var config = merge(common, production);
    break;
  default:
    var config = merge(common, development);
}

module.exports = config;
