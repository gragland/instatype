var path = require('path');
var express = require('express');
var compression = require('compression');
var server = express();

if (process.env.NODE_ENV === 'development'){

	var webpack = require('webpack');
	var config = require('./webpack.config.js');
	var compiler = webpack(config);

	server.use(require('webpack-dev-middleware')(compiler, {
	  publicPath: config.output.publicPath
	}));

	server.use(require('webpack-hot-middleware')(compiler));

	console.log('Hot Reloading Active');

}else{

	server.use(compression());
}

server.use('/assets', express.static(__dirname + '/public/assets'));

server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});