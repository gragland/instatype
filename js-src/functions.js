var React = require('react');
var GridComponent = require('./grid.js');

window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';
// Tells component where to find the values it needs from json returned by endpoint
window.dataKeys = {
  image: 'profile_picture',
  name: 'username'
}

// Callback: Function called when result is clicked
var resultSelected = function(result) {

  var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

  var requestParams = {
    client_id: window.instagramClientId,
    count: 20
  };

  request(endpoint, requestParams, function(data){
    var gridItems = data.data.map(function (result) {
      result.image = result.images.low_resolution.url;
      return result;
    });
    React.render(
      <GridComponent data={gridItems} />,
      document.getElementById('grid')
    );
  });
}

var request = function(endpoint, requestParams, callback){

  // Tiny JSONP Library: https://github.com/OscarGodson/JSONP
  JSONP(endpoint, requestParams, callback);

  /*
  // JQuery
  $.ajax({
    url: endpoint,
    data: requestParams,
    dataType: 'jsonp',
    success: function(data) {
      callback(data);
    }
  });*/
}

module.exports = {
  request : request,
  resultSelected : resultSelected
}; 

