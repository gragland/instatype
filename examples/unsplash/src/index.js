import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}