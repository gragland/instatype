var React = require('react');
var _ = require('underscore');
var $ = require('jquery');
var GridComponent = require('./grid.js');

window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';
// Tells component where to find the values it needs from json returned by endpoint
window.dataKeys = {
  image: 'profile_picture',
  name: 'username'
}

// Callback: Function called when result is clicked
var processResult = function(result) {

  var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

  $.ajax({
    url: endpoint,
    data: {
      client_id: window.instagramClientId,
      count: 20
    },
    dataType: 'jsonp',
    success: function(data) {
      var gridItems = _.map(data.data, function (result) {
        result.image = result.images.low_resolution.url;
        return result;
      });
      React.render(
        React.createElement(GridComponent, {data: gridItems}),
        document.getElementById('grid')
      );
    }
  });
}

module.exports = {
  processResult : processResult
}; 

