var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

/***** SHARED CONFIG *****/

var common = {
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  }
};

/***** DEVELOPMENT CONFIG *****/

var development = {
  devtool: 'eval',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        loaders: ['babel'], 
        include: [
          path.join(__dirname, 'src')
        ]
      }
    ]
  }
}

/***** DUAL DEVELOPMENT CONFIG *****/
/* Hot reloading of parent instatype project (instead of using node module) */
/* Easy development of both instatype and the example code  */

var dualDevelopment = {
  devtool: 'eval',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
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
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader',
        include: [ path.join(__dirname, '..', '..', 'src') ]
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=100000',
        include: [ path.join(__dirname, '..', '..', 'images') ]
      },
      { 
        test: /\.js?$/, 
        loaders: ['babel-loader'], 
        include: [ 
          path.join(__dirname, 'src'),
          path.join(__dirname, '..', '..', 'src')
        ]
      }
    ]
  }
}

/***** PRODUCTION CONFIG *****/

var production = {
  entry: {
    bundle: './src/index.js',
  },
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
        test: /\.js?$/, 
        loaders: ['babel'], 
        include: [
          path.join(__dirname, 'src')
        ]
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production'){
  var config = merge(common, production);
}else{
  if (process.env.DUAL){
    var config = merge(common, dualDevelopment);
  }else{
    var config = merge(common, development);
  }
}

module.exports = config;
