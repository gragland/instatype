var React = require('react');
var CustomFunctions = require('./custom-functions.js');
var InstaTypeComponent = require('../../../src/js/app.js');

React.initializeTouchEvents(true);

CustomFunctions.selectedHandler( { id : 478987666 } );

React.render(
  <InstaTypeComponent 
    placeholder="Search instagram users" 
    requestHandler={CustomFunctions.requestHandler}
    selectedHandler={CustomFunctions.selectedHandler}
    loadingIcon="../../images/loading.gif"
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('app')
);
