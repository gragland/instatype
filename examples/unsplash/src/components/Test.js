import React from 'react';
import api from './../api.js';
import Test2 from './Test2.js';
import { withData } from 'react-component-data';

class Test extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {};
  }

  static displayName = 'Test';

  static async getInitialProps(){
    const myPhotos = await api.getPopularPhotos(2, 3);
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    return { myPhotos: myPhotos };
  }

  render(){

    const { myPhotos, parentCount } = this.props;

    const myPhotosCount = (myPhotos ? myPhotos.length : null);

    return(
      <div style={{ marginTop: '3em', textAlign: 'center', border: '1px solid green', padding: '1em' }}>
        PARENT COUNT: {parentCount}<br/>
        COUNT: {myPhotosCount}<br/>

        { myPhotosCount &&
          <span>
            <Test2 key={0} parentCount={myPhotos.length}/>
            <Test2 key={1} parentCount={myPhotos.length}/>
          </span>
        }

      </div>
    )
  }
};

export default withData(Test);
