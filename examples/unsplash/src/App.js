import React from 'react';
import Helmet from "react-helmet";
import Instatype from 'instatype';
import throttle from 'lodash/throttle';
import Grid, { Block } from 'react-simple-grid';
import Photo from './components/Photo.js';
import Infinite from './components/Infinite/Infinite.js';
import ToTop from './components/ToTop.js';
import api from './api.js';
import { Link } from 'react-router';

import Test from './components/Test.js';

class App extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = props;

    this.getUsersThrottled = throttle(this.getUsers.bind(this), 300);
    this.userSelectedHandler = this.userSelectedHandler.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.resetPage = () => this.setState(App.defaultProps);
  }

  static displayName = 'App';

  // Get initial page data as props
  // Component will re-mount
  static async getInitialProps () {
    return await App.getPage('popular', 2);
  }

  static async getPage(section, page, username, currPhotos){

    let nextPhotos;
    switch (section){
      case 'popular':
        nextPhotos = await api.getPopularPhotos(page);
        break;
      case 'user':
        nextPhotos = await api.getUserPhotos(username, page);
    }

    return {
      section: section,
      photos: (currPhotos ? currPhotos.concat(nextPhotos) : nextPhotos),
      username: (section === 'user' ? username : null),
      page: page,
      loading: false,
      atEnd: (nextPhotos.length < api.photosPerPage)
    };
  }

  async getNextPage(){

    const { section, page, username, photos, loading } = this.state;

    if (loading){
      return false;
    }

    this.setState({ loading: true });

    const pageData = await App.getPage(section, page+1, username, photos);

    this.setState(pageData);
  }

  // Instatype request handler
  async getUsers(query, limit, callback){

    this.setState({ loadingUsers: true });

    const users = await api.getUsers(query);

    // Give each user a 'name' and 'image' for Instatype
    const usersWithProps = users.map((user) => {
      user.name = user.name; // Redundant
      user.image = user.profile_image.medium;
      return user;
    });

    this.setState({ loadingUsers: false });

    callback(usersWithProps);
  }

  // Instatype selected handler
  async userSelectedHandler(user){

    this.resetPage();

    this.refs.instatype.refs.inputComponent.refs.input.value = '';
    const pageData = await App.getPage('user', 1, user.username);
    this.setState(pageData);
  }

  render(){

    const { photos, page, atEnd, loading, loadingUsers } = this.state;

    // Grid options for different size screens
    const photoGridBreakPoints = [
      { maxWidth: 400, blocksPerRow: 2, spacing: 1 },
      { maxWidth: 700, blocksPerRow: 2, spacing: 2 },
      { maxWidth: 1100, blocksPerRow: 3, spacing: 3 }
    ];

    return(
      <div>
        <Helmet title="Unsplash Demo" />

        { photos && photos.length &&
          <span>
            <Test parentCount={photos.length}/>
            <Test parentCount={photos.length}/>
          </span>
        }

        <div className='navbar'>
          <Instatype 
            placeholder='Search Unsplash'
            requestHandler={this.getUsersThrottled}
            selectedHandler={this.userSelectedHandler}
            limit={10} 
            thumbStyle='circle'
            ref='instatype'/>
        </div>
        
        { !loadingUsers && 
          <div style={{ position: 'absolute', top: '3.6em', right: '4em' }}>
            <Link to={`/about`} style={{ textDecoration: 'none', color: '#87b8b9', fontSize: '1.3em' }}>About</Link>
          </div>
        }

        {/*
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
        */}
        
      
        { photos && photos.length > 0 &&
          <Infinite requestHandler={this.getNextPage} atEnd={atEnd}>
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

        { loading && !page &&
          <div className='message'>
            Loading ...
          </div>
        }

        <ToTop/>
      </div>
    )
  }
};

App.defaultProps = {
  section: null,
  photos: null,
  username: null,
  page: null,
  loading: true,
  atEnd: null
};

export default App;
