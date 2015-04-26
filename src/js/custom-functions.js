var React = require('react');
var GridComponent = require('./grid.js');

window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';

// Customize this function so that it returns the query params expected by your endpoint
module.exports.getRequestParams = function(query, props){
  return {
    client_id: window.instagramClientId,
    q: query,
    count: props.limit
  };
}

// Customize this function to reformat the data returned by your endpoint
module.exports.requestResults = function(endpoint, requestParams, callback){

  var wrappedCallback = function(data){

    // You must set an "image" and "name" key for each result
    var renamedData = data.data.map(function(result){
      result.image = result['profile_picture'];
      result.name = result['username'];
      return result;
    });

    callback(renamedData);
  }

  request(endpoint, requestParams, wrappedCallback);
}

// Customize this function to do something when a result is selected
module.exports.resultSelected = function(result) {

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

// Customize this function to use your favorite JSONP library
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