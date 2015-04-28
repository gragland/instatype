var React = require('react');
var CustomFunctions = require('./custom-functions.js');
var InstaTypeComponent = require('../../../src/js/app.js');

React.initializeTouchEvents(true);

CustomFunctions.resultSelected( { id : 478987666 } );

React.render(
  <InstaTypeComponent 
    placeholder="Search instagram users" 
    endpoint="https://api.instagram.com/v1/users/search" 
    dataKeys={window.dataKeys}
    customFunctions={CustomFunctions}
    loadingIcon="../../images/loading.gif"
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('instatype')
);
