var React = require('react');

var Result = React.createClass({
  getInitialState: function(){
    return {
      isHovered: false
    };
  },
  handleSelect: function (event) {
    this.props.handleSelect(this.props.data);
    event.preventDefault();
    event.stopPropagation();
  },
  shouldComponentUpdate: function(nextProps, nextState){
    return (!this.props.data.id || // Always update if we have no data.id to identify whether result changed
              (this.props.data.id !== nextProps.data.id) || // Update if data.id did change
                this.state.isHovered !== nextState.isHovered); // Update if hover state changed
  },
  onMouseOver: function(){
    this.setState({ isHovered: true })
  },
  onMouseLeave: function(){
    this.setState({ isHovered: false })
  },
  render: function(){

    var className = 'clearfix';
    if (this.state.isHovered)
      className += ' hovered';

    return (
      <li className={className} onClick={this.handleSelect} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          {this.props.image && 
            <img src={this.props.image}/>
          }
          <div>{this.props.children}</div>
      </li>
    );
  }
});


module.exports = Result;