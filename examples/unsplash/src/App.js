var React = require('react');

// Require source instead of node module so that we modify instatype
var Instatype = require('./../../../src/js/app.js');

var INSTAGRAM_CLIENT_ID = '02d26cb819954ba7b5c3c072a885759f';
var INSTAGRAM_FETCH_COUNT = 28;

var App = React.createClass({

  getInitialState: function(){
    return {
      gridItems: null,
      nextPage: null
    };
  },

  requestHandler: function(query, limit, callback){
    var endpoint = 'https://api.instagram.com/v1/users/search';

    var requestParams = {
      client_id: INSTAGRAM_CLIENT_ID,
      q: query,
      count: limit
    };

    JSONP(endpoint, requestParams, function(data){
      
      // You must set an "image" and "name" key for each result
      var renamedData = data.data.map(function(result){
        result.image = result['profile_picture'];
        result.name = result['username'];
        return result;
      });

      callback(renamedData);

    });

  },

  selectedHandler: function(result){
    var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

    var requestParams = {
      client_id: INSTAGRAM_CLIENT_ID,
      count: INSTAGRAM_FETCH_COUNT
    };

    request(endpoint, requestParams, function(data){
      var gridItems = data.data.map(function (result) {
        result.image = result.images.low_resolution.url;
        return result;
      });

      var nextPage = data.pagination.next_url;

      this.setState({
        gridItems: gridItems,
        nextPage: nextPage
      })

    });
  },

  render: function(){

    var { gridItems, nextPage } = this.state;

    return(
      <div>

        <div id="navbar">
          <Instatype 
            placeholder="Search Unsplash users" 
            requestHandler={this.requestHandler}
            selectedHandler={this.selectedHandler}
            limit={6} 
            thumbStyle="circle"/>
        </div>

        { gridItems && 
          <div id="grid">
            <GridComponent initialData={gridItems} initialNextPage={nextPage}/>
          </div>
        }
       
      </div>
    )
  }
});

module.exports = App 