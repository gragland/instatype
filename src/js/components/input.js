var React = require('react');

var InputComponent = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState){
      return (this.props.value !== nextProps.value || 
                this.props.triggerBlur !== nextProps.triggerBlur ||
                  this.props.triggerFocus !== nextProps.triggerFocus);
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
    triggerBlur: function(){
      React.findDOMNode(this.refs.inputTypeahead).blur();
    },
    triggerFocus: function(){
     
      React.findDOMNode(this.refs.inputTypeahead).focus();
    },
    componentDidMount: function(){
      if (this.props.triggerFocus === true){
         this.triggerFocus();
      }
    },
    componentDidUpdate: function(){
      // Passing props.triggerBlur = true causes blur() to be called on input after render
      // Useful if we need to force input to no longer be in focus
      // IMPORTANT: handleBlur() passed down from parent component should ...
      // ... change props.triggerBlur back to false or input will never be able to regain focus.
      if (this.props.triggerBlur === true){
         this.triggerBlur();
      }else
      if (this.props.triggerFocus === true){
         this.triggerFocus();
      }
    },
    
    render: function(){
      return (
          <input type="text" autoCorrect="off" autoComplete="off" autoCapitalize="off" placeholder={this.props.placeholder} ref="inputTypeahead" className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      );
    }
});


module.exports = InputComponent;