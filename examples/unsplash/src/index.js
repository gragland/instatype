import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ComponentData from 'react-component-data';
import routes from './routes';

ReactDOM.render(
  <ComponentData>
    <Router history={browserHistory} routes={routes} />
  </ComponentData>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}