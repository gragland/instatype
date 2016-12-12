const path = require('path');
const webpack = require('webpack');

/***** SHARED CONFIG *****/

const common = {
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  }
};

/***** DEVELOPMENT CONFIG *****/

const development = {
  devtool: 'eval',
  entry: {
    bundle: [
      'whatwg-fetch', // Fetch polyfill for Unsplash
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        loaders: ['babel'], 
        include: [
          path.join(__dirname, 'src')
        ]
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=100000',
        include: [ 
          path.join(__dirname, 'src', 'components', 'Infinite')
        ]
      }
    ]
  }
}

/***** PRODUCTION CONFIG *****/

const production = {
  entry: {
    bundle: [
    'whatwg-fetch',
    './src/index.js'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), // ~6kb difference
    //new webpack.optimize.OccurrenceOrderPlugin(), // No size difference
    new webpack.optimize.UglifyJsPlugin({ 
      compress: {
        warnings: false
      } 
    })
  ],
  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        loaders: ['babel'], 
        include: [
          path.join(__dirname, 'src')
        ]
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=100000',
        include: [ 
          path.join(__dirname, 'src', 'components', 'Infinite')
        ]
      }
    ]
  }
}

/***** LOCAL INSTATYPE CONFIG *****/
/* Merge with prod or dev config to import local instatype source (instead of using node module) */
/* Allows for easy development of both instatype and example code  */

const localInstatype = {
  resolve: {
    alias: {
      // Make require('instatype') resolve to src (not node module) ...
      // ... so that we can work on instatype with hot reloading.
      'instatype': path.join(__dirname, '..', '..', 'src', 'js', 'app.js'),
      //'instatype': path.join(__dirname, '..', '..', 'lib', 'instatype.js'),
      //'react-simple-grid': path.join(__dirname, '..', '..', '..', 'react-simple-grid', 'src', 'GridResponsive.js')
    },
    root: [
      // Find node module directories in this example and parent instatype project.
      path.join(__dirname, 'node_modules'), 
      path.join(__dirname, '..', '..', 'node_modules')
    ]
  },
  // Because we make require('instatype') resolve to src ...
  // ... we need to include same loaders used by instatype's webpack.config.js
  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        loaders: ['babel-loader'], 
        include: [ 
          path.join(__dirname, 'src'),
          path.join(__dirname, '..', '..', 'src'),
          //path.join(__dirname, '..', '..', '..', 'react-simple-grid', 'src')
        ]
      },
      { 
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader',
        include: [ path.join(__dirname, '..', '..', 'src') ]
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=100000',
        include: [ 
          path.join(__dirname, '..', '..', 'images'),
          path.join(__dirname, 'src', 'components', 'Infinite')
        ]
      }
    ]
  }
}

let config;

if (process.env.NODE_ENV === 'production'){
  config = Object.assign(common, production, localInstatype);
}else{
  if (process.env.DUAL){
    config = Object.assign(common, development, localInstatype);
  }else{
    config = Object.assign(common, development);
  }
}

module.exports = config;
