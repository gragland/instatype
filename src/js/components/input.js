var React = require('react');

var InputComponent = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState){
      return false;
    },
    handleChange: function(event){
      this.props.handleChange(event.target.value);
    },
    handleFocus: function(event){
      this.props.handleFocus(event);
    },
    handleBlur: function(event){
      this.props.handleBlur(event);
    },   
    render: function(){
      return (
          <input 
            type="text" 
            autoCorrect="off" 
            autoComplete="off" 
            autoCapitalize="off"
            placeholder={this.props.placeholder} 
            className="input-typeahead" 
            onChange={this.handleChange} 
            onFocus={this.handleFocus} 
            onBlur={this.handleBlur} 
            ref="input" />
      );
    }
});


module.exports = InputComponent;