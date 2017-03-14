import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';

class NotFound extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{ marginTop: '3em', textAlign: 'center' }}>
        <Helmet title="404" />
        <div style={{ maxWidth: '700px', padding: '0 2em', margin: '2em auto 0 auto', fontSize: '1.6em' }}>
          The page could not be found 🙁
        </div>
      </div>
    )
  }
};

export default NotFound;
