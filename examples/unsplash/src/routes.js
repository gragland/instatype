import React from 'react';
import { Route } from 'react-router';

import App from './App.js';
import About from './About.js';
import NotFound from './components/404.js';

const routes = (
  <div>
    <Route path='/' component={App} />
    <Route path='/about' component={About} />
    <Route path='*' component={NotFound} />
  </div>
);

export default routes;