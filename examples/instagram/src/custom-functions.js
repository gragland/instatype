var React = require('react');
var GridComponent = require('./grid.js');

window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';
window.instagramCount = 28;

// Customize this function to reformat the data returned by your endpoint
module.exports.requestHandler = function(query, limit, callback){

  var endpoint = 'https://api.instagram.com/v1/users/search';

  var requestParams = {
    client_id: window.instagramClientId,
    q: query,
    count: limit
  };

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
module.exports.selectedHandler = function(result) {

  var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

  var requestParams = {
    client_id: window.instagramClientId,
    count: window.instagramCount
  };

  request(endpoint, requestParams, function(data){
    var gridItems = data.data.map(function (result) {
      result.image = result.images.low_resolution.url;
      return result;
    });

    var nextPage = data.pagination.next_url;

    React.render(
      <GridComponent initialData={gridItems} initialNextPage={nextPage}/>,
      document.getElementById('grid')
    );
  });
}

// Let's GridResultsComponent handle the initial ajax call. Advantage is that we get an initial loading indicator.
// Rename function to "selectedHandler" to use
module.exports.selectedHandlerAlternate = function(result) {

  var endpoint = "https://api.instagram.com/v1/users/" + result.id + 
                    "/media/recent?client_id=" + window.instagramClientId + 
                        "&count=" + window.instagramCount;

  React.render(
      <GridComponent initialNextPage={endpoint}/>,
      document.getElementById('grid')
  );
}


// Customize this function to use your favorite JSONP library
var request = module.exports.request = function(endpoint, requestParams, callback){

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

module.exports.throttle = function(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}