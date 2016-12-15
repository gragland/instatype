var path = require('path');
var express = require('express');
var compression = require('compression');
var server = express();

if (process.env.NODE_ENV === 'development'){

	var webpack = require('webpack');
	var config = require('./webpack.config.js');
	var compiler = webpack(config);

	server
	.use(require('webpack-dev-middleware')(compiler, { publicPath: config.output.publicPath }))
	.use(require('webpack-hot-middleware')(compiler));

}else{
	server.use(compression());
}

server
.use('/assets', express.static(__dirname + '/public/assets'))
.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})
.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});