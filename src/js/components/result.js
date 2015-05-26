var React = require('react');

var Result = React.createClass({
  getInitialState: function(){
    return {
      isHovered: false
    };
  },
  handleSelect: function (event) {

    this.setHoveredClass();

    this.props.handleSelect(this.props.data);
  },
  shouldComponentUpdate: function(nextProps, nextState){

    return true;

    return (this.props.data.id !== nextProps.data.id ||
              this.state.isHovered !== nextState.isHovered);
  },
  setHoveredClass: function(hover){
    this.setState({ isHovered: hover })
  },
  onMouseOver: function(){
    this.setHoveredClass(true);
  },
  onMouseLeave: function(){
    this.setHoveredClass(false);
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