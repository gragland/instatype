import React from 'react';
import api from './../api.js';
import { withData } from 'react-component-data';

class Test2 extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {};
  }

  static displayName = 'Test2';

  static async getInitialProps(){
    const myPhotos = await api.getPopularPhotos(2, 4);
    return { myPhotos: myPhotos };
  }


  render(){

    const { myPhotos, parentCount } = this.props;

    const myPhotosCount = (myPhotos ? myPhotos.length : null);

    return(
      <div style={{ marginTop: '3em', textAlign: 'center', border: '1px solid red', padding: '1em' }}>
        Test2
        PARENT COUNT: {parentCount}<br/>
        COUNT: {myPhotosCount}<br/>
      </div>
    )
  }
};

export default withData(Test2);
