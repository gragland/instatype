var React = require('react');

var LoadingComponent = React.createClass({
    render: function(){
      return (
          <img className="loading-icon" src={this.props.icon}/>
      );
    }
});


module.exports = LoadingComponent;


