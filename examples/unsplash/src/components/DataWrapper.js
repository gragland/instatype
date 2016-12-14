import React from 'react';

class DataWrapper extends React.PureComponent {

	getChildContext () {
    return {
      serverData: this.props.serverData
    };
  }

  render(){
    return this.props.children;
  }
};

DataWrapper.childContextTypes = {
  serverData: React.PropTypes.object
};

export default DataWrapper;