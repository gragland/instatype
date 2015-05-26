var React = require('react');

var LoadingComponent = React.createClass({
	shouldComponentUpdate: function(nextProps, nextState){
      return false;
    },
    render: function(){
      return (
          <img className="loading-icon" src={this.props.icon}/>
      );
    }
});


module.exports = LoadingComponent;


