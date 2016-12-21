import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';

class About extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{ marginTop: '3em', textAlign: 'center' }}>
        <Helmet title="About" />
        <div>
          <Link to={`/`} style={{ textDecoration: 'none', color: '#87b8b9', fontSize: '1.4em' }}>Home</Link>
        </div>
        <div style={{ maxWidth: '700px', padding: '0 2em', margin: '2em auto 0 auto', fontSize: '1.6em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    )
  }
};

export default About;
