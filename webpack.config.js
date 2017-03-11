const webpack = require('webpack');

const common = {
  entry: {
    instatype: './src/js/app.js'
  },
  module: {
    loaders: [
      { 
        test: /\.less$/, 
        loader: 'raw-loader!less-loader',
        include: __dirname + '/src'
      },
      { 
        test: /\.js$/, 
        loaders: ['babel-loader'], 
        include: __dirname + '/src'
      },
      { 
        test: /\.svg$/, 
        loader: 'url-loader?limit=10000',
        include: __dirname + '/images'
      }
    ]
  },
  externals: {
    'react': {
      'root': 'React',
      'commonjs2': 'react',
      'commonjs': 'react',
      'amd': 'react'
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

let config;

if (process.env.TYPE === 'script'){
  config = Object.assign(common, script);
}else{
  config = Object.assign(common, library);
}

module.exports = config;
