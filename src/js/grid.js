var React = require('react');
var CustomFunctions = require('./custom-functions.js');

// Displays grid of images
// Example component used by our custom resultSelected function (custom-functions.js)
var GridComponent = React.createClass({

  getInitialState: function(){
    return {
      data: this.props.initialData,
      nextPage: this.props.initialNextPage,
      paging: false
    };
  },
  // If component is passed new props then we need to update state
  componentWillReceiveProps: function(nextProps){
    this.setState({
      data: nextProps.initialData,
      nextPage: nextProps.initialNextPage,
      paging: false
    });
  },
  getDefaultProps: function() {
    return {
      data: [],
      nextPage: null,
      paging: false
    };
  },
  render: function(){

    var resultNodes = this.state.data.map(function(result){
        return (
          <div className="item" id={result.id} key={result.id}>
            <div className="dummyHeight"></div>
            <img src={result.image}/>
          </div>
        );
    });
    
    return (
      <div>
          {resultNodes}
      </div>
    );
  },

  componentDidMount: function(){

    var app = this;

    window.addEventListener('scroll', CustomFunctions.throttle(function(event){
      app.checkScroll();
    }, 500));

    this.checkScroll();
  },

  requestNextPage: function(){

    console.log('Requesting next page');

    if (this.state.nextPage){
      CustomFunctions.request(this.state.nextPage, this.requestCallback);
    }else{
      this.setState({nextPage: null});
      console.log('No more pages');
    }
  },

  requestCallback: function(data){

    // Logic specific to Instagram API response
    var newData = data.data.map(function (result) {
      result.image = result.images.low_resolution.url;
      return result;
    });

    var mergedData = this.state.data.concat(newData);
    var nextPage = data.pagination.next_url;
    
    this.setState({
      data: mergedData,
      nextPage: nextPage,
      paging: false
    });
  },

  checkScroll: function(trailing){

    window.allowCheckScroll = false;

    var minDistanceFromBotton = 200;

    var totalHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = (document.body && document.body.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop;

    console.log('Distance from load more: ' + (totalHeight - (scrollTop + clientHeight + minDistanceFromBotton)));

    var atBottom = (totalHeight < (scrollTop + clientHeight + minDistanceFromBotton) ? true : false );

    // If scrolled to bottom, not currently paging, and there are more pages
    if (atBottom && this.state.nextPage && !this.state.paging) {

      // Set application state (Paging, Increment page)
      this.setState( { paging: true } );

      // Get the next page from the server
      this.requestNextPage();
    }
  }
  
});


module.exports = GridComponent; 