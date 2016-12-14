const webpack = require('webpack');

const common = {
  entry: {
    instatype: './src/js/app.js'
  },
  module: {
    loaders: [
      { 
        test: /\.less$/, 
        //loader: 'style-loader!raw-loader!less-loader',
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
        loader: 'url-loader?limit=100000',
        include: __dirname + '/images'
      }
    ]
  },
  externals: {
    react: 'React'
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

if (process.env.TYPE === 'library'){
  config = Object.assign(common, library);
}else
if (process.env.TYPE === 'script'){
  config = Object.assign(common, script);
}

module.exports = config;
