import React from 'react';

class Input extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
      return false;
    }

    handleChange(event){
      this.props.handleChange(event.target.value);
    }

    handleFocus(event){
      this.props.handleFocus(event);
    }

    handleBlur(event){
      this.props.handleBlur(event);
    }

    render(){

      const { defaultValue, placeholder } = this.props;

      return (
        <input 
          type="text" 
          defaultValue={defaultValue}
          autoCorrect="off" 
          autoComplete="off" 
          autoCapitalize="off"
          placeholder={placeholder} 
          className="input-typeahead" 
          onChange={this.handleChange} 
          onFocus={this.handleFocus} 
          onBlur={this.handleBlur} 
          ref="input" />
      );
    }
};

export default Input;