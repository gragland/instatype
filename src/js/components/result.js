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
    return (this.props.data.id && (this.props.data.id !== nextProps.data.id) ||
              this.state.isHovered !== nextState.isHovered);
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