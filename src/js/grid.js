var React = require('react');

// Displays grid of images
// Example component used by our custom resultSelected function (custom-functions.js)
var GridComponent = React.createClass({

  getDefaultProps: function() {
    return {
      data: [],
    };
  },

  render: function(){

    var resultNodes = this.props.data.map(function(result){
        return (<img src={result.image} key={result.id} />);
    });
    
    return (
        <div>
            {resultNodes}
        </div>
    );
  }
});


module.exports = GridComponent; 