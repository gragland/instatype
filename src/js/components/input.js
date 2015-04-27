var React = require('react');

var InputComponent = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState){
      return (this.props.value !== nextProps.value || 
                this.props.triggerBlur !== nextProps.triggerBlur);
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
      React.findDOMNode(component).blur();
    },
    componentDidUpdate: function(){
      // Passing props.triggerBlur = true causes blur() to be called on input after render
      // Useful if we need to force input to no longer be in focus
      // IMPORTANT: handleBlur() passed down from parent component should ...
      // ... change props.triggerBlur back to false or input will never be able to regain focus.
      if (this.props.triggerBlur === true){
        React.findDOMNode(this.refs.inputTypeahead).blur();
      }
    },
    render: function(){
      return (
          <input type="text" placeholder={this.props.placeholder} ref="inputTypeahead" className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      );
    }
});


module.exports = InputComponent;