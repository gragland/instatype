var React = require('react');

var Result = React.createClass({
  handleSelect: function (event) {
    this.props.handleSelect(this.props.data);
  },
  shouldComponentUpdate: function(nextProps, nextState){
    return this.props.data.id !== nextProps.data.id;
  },
  render: function(){
    return (
      <li className="clearfix" onClick={this.handleSelect}>
          {this.props.image && 
            <img src={this.props.image}/>
          }
          <div>{this.props.children}</div>
      </li>
    );
  }
});


module.exports = Result;