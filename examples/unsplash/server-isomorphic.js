import path from 'path';
import express from 'express';
import compression from 'compression';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import routes from './src/routes.js';
import Layout from './src/components/Layout.js';
import DataWrapper from './src/components/DataWrapper.js';
import api from './src/api.js';

// Fetch data based on route (path, params) here
async function fetchData(path, params){
  if (path === '/'){
    const photos = await api.getPopularPhotos(1);
    var serverData = { path: path, data: photos };
    return serverData;
  }
}

var server = express();

server
.use(compression())
.use('/assets', express.static(path.join(__dirname, './../public/assets'), { index: false, maxAge: 31536000000 }))
.use((req, res, next) => {
  match(
    { routes: routes, location: req.url }, 
    async (error, redirectLocation, renderProps) => {

      if (error){
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      } else if (!renderProps) { // Should never happen if we have a catch-all (*) error page route
        res.status(404).send('Page not found');
      } else {

        const serverData = await fetchData(req.url, renderProps.params);

        // Render route as a string
        var markup = renderToString( 
          <DataWrapper serverData={serverData}>
            <RouterContext {...renderProps} /> 
          </DataWrapper>
        );

        // Extract data for page <head> (title, meta, scripts)
        // See: https://github.com/nfl/react-helmet#server-usage
        var head = Helmet.rewind();

        // Render layout and pass in markup, serverData fetched server-side, and head
        // We use renderToStaticMarkup for layout so react-id dom attributes aren't added
        res.send(
          renderToStaticMarkup( <Layout markup={markup} serverData={serverData} head={head} /> )
        );

      }
    }
  );
})
.listen( (process.env.PORT || 3000), (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log('Server started');
});

module.exports = server
