import React from 'react';
import Instatype from 'instatype';
import throttle from 'lodash/throttle';
import Grid, { Block } from 'react-simple-grid';
import Photo from './components/Photo.js';
import Infinite from './components/Infinite/Infinite.js';
import ToTop from './components/ToTop.js';
import api from './api.js';

class App extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      section: 'popular',
      photos: null,
      username: null,
      page: 0,
      loading: false,
      atEnd: false
    };

    this.getUsersThrottled = throttle(this.getUsers.bind(this), 300);
    this.userSelectedHandler = this.userSelectedHandler.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  static async getInitialProps () {
    return await api.getPopularPhotos(1);
  }

  static contextTypes = {
    serverData: React.PropTypes.object
  };

  componentWillMount(){

    console.log('serverData', this.props.serverData);

    const { serverData } = this.context;

    if (serverData){

      this.setState({ 
        section: 'popular',
        photos: serverData, 
        page: 1
      });

    }else{
      this.getPage();
    }
  }

  async getPage(){

    const { photos, section, username, page, loading } = this.state;

    if (loading){
      return false;
    }

    const nextPage = page + 1;

    console.log(`[APP] Getting page (${nextPage})`);

    this.setState({ loading: true });

    let nextPhotos;
    switch (section){
      case 'popular':
        nextPhotos = await api.getPopularPhotos(nextPage);
        break;
      case 'user':
        nextPhotos = await api.getUserPhotos(username, nextPage);
    }

    this.setState({
      section: section,
      photos: (photos ? photos.concat(nextPhotos) : nextPhotos),
      username: (section === 'user' ? username : null),
      page: nextPage,
      loading: false,
      atEnd: (nextPhotos.length < api.photosPerPage)
    });
  }

  // Instatype request handler
  async getUsers(query, limit, callback){

    const users = await api.getUsers(query);

    // Give each user a 'name' and 'image' for Instatype
    const usersWithProps = users.map((user) => {
      user.name = user.name; // Redundant
      user.image = user.profile_image.medium;
      return user;
    });

    callback(usersWithProps);
  }


  userSelectedHandler(user){

    // Clear instatype
    this.refs.instatype.refs.inputComponent.refs.input.value = '';

    this.setState({
      section: 'user',
      page: 0,
      photos: null,
      username: user.username,
      loading: false
    },() => {
      this.getPage();
    });
  }

  render(){

    const { photos, page, loading, atEnd } = this.state;

    // Grid options for different size screens
    const photoGridBreakPoints = [
      { maxWidth: 400, blocksPerRow: 2, spacing: 1 },
      { maxWidth: 700, blocksPerRow: 2, spacing: 2 },
      { maxWidth: 1100, blocksPerRow: 3, spacing: 3 }
    ];

    return(
      <div>
        <div className='navbar'>
          <Instatype 
            placeholder='Search Unsplash'
            requestHandler={this.getUsersThrottled}
            selectedHandler={this.userSelectedHandler}
            limit={10} 
            thumbStyle='circle'
            ref='instatype'/>
        </div>
     
        <div style={{ marginBottom: '30px' }}>

          <Grid spacing={5} breakPoints={[ { maxWidth: 800, spacing: 1, blockWidth: [ 1/4 ] } ]} hideOuterSpacing={true} blockWidth={[ 1/3, 2/3, 2/3, 1/3 ]}>
            
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
            <Block><div style={{ backgroundColor: 'red', width: '100%', height: '100px' }}></div></Block>
      
          </Grid>
        </div>
        
      
        { photos && photos.length > 0 &&
          <Infinite requestHandler={this.getPage} atEnd={atEnd}>
            <Grid blocksPerRow={4} spacing={5} breakPoints={photoGridBreakPoints} passBlockWidth={true} hideOuterSpacing={true}>
              { photos.map( photo => <Photo data={photo} key={photo.id} /> )}
            </Grid>
          </Infinite>
        }
     
        { photos && photos.length === 0 &&
          <div className='message'>
            This user has no photos 🙁
          </div>
        }

        { loading && page === 0 &&
          <div className='message'>
            Loading ...
          </div>
        }

        <ToTop/>
      </div>
    )
  }
};

export default App;
