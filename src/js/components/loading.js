var React = require('react');

var icon = require('./../../../images/loading.svg');

var LoadingComponent = React.createClass({
	getDefaultProps: function() {
	  return {
	    icon: icon
  	}
  },

  render: function(){
    return (
      <img className="loading-icon" src={this.props.icon}/>
    );
  }
});

module.exports = LoadingComponent;