var webpack = require('webpack');
var merge = require('webpack-merge');

/* 
  To upgrade to webpack 2:
    - npm install 2.1.0-beta.27 --save-dev
    - Change module.loaders to module.rules
    - Update .babelrc: { "presets": [ ["es2015", { "modules": false }], "react" ] }
*/

const common = {
  entry: {
    instatype: './src/js/app.js'
  },
  module: {
    loaders: [
      { 
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader',
        include: __dirname + '/src'
      },
      { 
        test: /\.js$/, 
        loaders: ['babel-loader'], 
        include: __dirname + '/src'
      },
      { 
        test: /\.svg$/, 
        loader: 'url-loader?limit=100000',
        include: __dirname + '/images'
      }
    ]
  },
  externals: {
    "react": {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  }
};

// Build for npm package
// Parent project should run any minification plugins
const library = {
  output: {
    path: __dirname + '/lib/',
    filename: '[name].js',
    library: 'instatype',
    libraryTarget: 'umd'
  }
}

// Build for script tag
// Example in /dist/test.html
const script = {
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    library: 'instatype',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

if (process.env.TYPE === 'library'){
  var config = merge(common, library);
}else
if (process.env.TYPE === 'script'){
  var config = merge(common, script);
}


module.exports = config;