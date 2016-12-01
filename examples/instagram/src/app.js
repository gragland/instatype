var React = require('react');
var ReactDOM = require('react-dom');
var InstaTypeComponent = require('instatype');
var CustomFunctions = require('./custom-functions.js');

CustomFunctions.selectedHandler( { id : 478987666 } );

ReactDOM.render(
  <InstaTypeComponent 
    placeholder="Search instagram users" 
    requestHandler={CustomFunctions.requestHandler}
    selectedHandler={CustomFunctions.selectedHandler}
    loadingIcon="../../images/loading.gif"
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('app')
);
