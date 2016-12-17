import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './App.js';

import ComponentData from './components/ComponentData/ComponentData.js';

ReactDOM.render(
	<ComponentData>
    <Router history={browserHistory} routes={routes} />
  </ComponentData>,
 	document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}