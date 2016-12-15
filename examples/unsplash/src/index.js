import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import DataWrapper from './components/DataWrapper.js';
import App from './App.js';


function createElementFn(serverProps) {
  return function(Component, props) {
    return <Component {...serverProps} {...props} />
  }
}

const serverProps = {
  serverData: 'Hi! This is data.'
}

{/* <Router history={browserHistory} routes={routes} createElement={createElementFn(serverProps)}/> */}

// Get data that was fetched server-side and pass to DataWrapper to make available via context
var serverDataElement = document.getElementById('serverData');
var serverData = (serverDataElement ? JSON.parse(serverDataElement.innerHTML) : null);

ReactDOM.render(
  <DataWrapper serverData={serverData}>
    <Router history={browserHistory} routes={routes} createElement={createElementFn(serverProps)}/>
  </DataWrapper>,
 	document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}