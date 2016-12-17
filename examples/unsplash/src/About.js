import React from 'react';
import { Link } from 'react-router';

class About extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        About this site
      </div>
    )
  }
};

export default About;
