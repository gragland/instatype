var React = require('react');

var Block = React.createClass({

  render: function(){

    var style = {
      position: 'relative',
      float: 'left',
      width: this.props.width,
      paddingLeft: (this.props.spacing / 2 ) + 'px',
      paddingRight: (this.props.spacing / 2 ) + 'px',
      boxSizing: 'border-box',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box'
    };

    return (
      <div className="block"
        style={style}>
          {this.props.children}
      </div>
    );
  }
});

module.exports = Block;
