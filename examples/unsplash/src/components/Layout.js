import React from 'react';

const Layout = ({ markup, head, serverData }) => (
  <html>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
     
      {head.title.toComponent()}
      {head.meta.toComponent()}

      <link rel='stylesheet' type='text/css' href='/assets/style.css'/>
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{__html: markup}}></div>

      { serverData &&
        <script id='serverData' type='application/json' dangerouslySetInnerHTML={{__html: safeStringify(serverData)}}></script>
      }
      
      <script src='/assets/bundle.js'></script>
    </body>
  </html>
);

function safeStringify(obj){
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

export default Layout;
