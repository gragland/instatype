const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ENV = process.env.NODE_ENV;
const BUILD_SERVER = process.env.BUILD_SERVER;
const ALIAS = (process.env.ALIAS === 'false' ? false : true); // Default to true

const config = {};

/**
 * This Webpack config accomplishes the following:
 * - Builds server, client, and client w/ hot loading (dev)
 * - Can alias components to local directories so that we can develop them in tandem (rather than fetch from npm)
 */

/******** ENTRY ********/

if (ENV === 'production' && BUILD_SERVER){
  config.entry = {
    server: [
      'isomorphic-fetch', // Fetch polyfill for Unsplash api (with Node support)
      './server-isomorphic.js'
    ]
  };
}else if (ENV === 'production'){
  config.entry = {
    bundle: [
      'whatwg-fetch', // Fetch polyfill for Unsplash api
      './src/index.js'
    ]
  };
}else{
  config.entry = {
    bundle: [
      'whatwg-fetch', 
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  };
}

/******** OUTPUT ********/

if (ENV === 'production' && BUILD_SERVER){
  config.output = {
    path: path.join(__dirname, 'server-build'),
    filename: 'server.js',
    publicPath: '/assets/'
  };
}else{
  config.output = {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  };
}

/******** PLUGINS ********/

if (ENV === 'production'){
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    //new webpack.optimize.OccurrenceOrderPlugin(), // No size difference
    new webpack.optimize.DedupePlugin(), // ~6kb difference
    new webpack.optimize.UglifyJsPlugin({ 
      compress: {
        warnings: false
      } 
    })
  ];
}else{
  config.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

/******** LOADERS ********/

config.module = { 
  loaders: [
    { 
      test: /\.js?$/, 
      loaders: ['babel'], 
      include: [
        path.join(__dirname, 'src')
      ].concat(( ALIAS ? [
        path.join(__dirname, '..', '..', '..', 'instatype', 'src'),
        path.join(__dirname, '..', '..', '..', 'react-simple-grid', 'src'),
        path.join(__dirname, '..', '..', '..', 'react-scroll-loader', 'src'),
        path.join(__dirname, '..', '..', '..', 'react-perfect-image', 'src'),
        path.join(__dirname, '..', '..', '..', 'react-component-data', 'src')
      ] : [])).concat(( (ENV === 'production' && BUILD_SERVER) ? [
        path.join(__dirname) // So we can parse server-isomorphic.js
      ] : []))
    },
    { 
      test: /\.svg$/,
      loader: 'url-loader?limit=10000',
      include: ( ALIAS ? [
        path.join(__dirname, '..', '..', '..', 'react-scroll-loader', 'src'),
        path.join(__dirname, '..', '..', '..', 'instatype', 'images'),
      ] : [])
    }
  ].concat(( ALIAS ? [
    { 
      test: /\.less$/, 
      loader: 'raw-loader!less-loader',
      include: [ path.join(__dirname, '..', '..', '..', 'instatype', 'src') ]
    },
  ] : []))
}

/******** RESOLVE ********/

if (ALIAS){
  config.resolve = {
    alias: {
      'instatype': path.join(__dirname, '..', '..', '..', 'instatype', 'src', 'js', 'app.js'),
      'react-simple-grid': path.join(__dirname, '..', '..', '..', 'react-simple-grid', 'src', 'GridResponsive.js'),
      'react-scroll-loader': path.join(__dirname, '..', '..', '..', 'react-scroll-loader', 'src', 'Infinite.js'),
      'react-perfect-image': path.join(__dirname, '..', '..', '..', 'react-perfect-image', 'src', 'Image.js'),
      'react-component-data': path.join(__dirname, '..', '..', '..', 'react-component-data', 'src', 'index.js')
    },
    // Include node_modules path for each alias (otherwise this project would need to npm install alias dependencies)
    root: [
      path.join(__dirname, 'node_modules'), 
      path.join(__dirname, '..', '..', '..', 'instatype', 'node_modules'),
      path.join(__dirname, '..', '..', '..', 'react-simple-grid', 'node_modules'),
      path.join(__dirname, '..', '..', '..', 'react-scroll-loader', 'node_modules'),
      path.join(__dirname, '..', '..', '..', 'react-perfect-image', 'node_modules'),
      path.join(__dirname, '..', '..', '..', 'react-component-data', 'node_modules')
    ]
  };

  // Also look for loaders in alias node_module paths
  config.resolveLoader = {
    modulesDirectories: config.resolve.root
  }
}

/******** OTHER ********/

if ('production' && BUILD_SERVER){
  config.target = 'node';
  config.node = {
    // Prevents webpack from making __dirname relative 
    // Absolute path is needed by server-isomorphic.js
    __dirname: false,
    __filename: false
  };
  // We don't want to bundle dependencies into the server-build js
  // The server should read them directly from node_modules
  // But this will override webpack aliases so also include them here or we'll get the npm version
  config.externals = nodeExternals({
    whitelist: [
      'lodash', 
      'instatype', 
      'react-simple-grid', 
      'react-component-data', 
      'react-scroll-loader', 
      'react-perfect-image'
    ]
  });

}

module.exports = config;
