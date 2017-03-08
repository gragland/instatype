import React from 'react';
import Helmet from "react-helmet";
import Instatype from 'instatype';
import throttle from 'lodash/throttle';
import Grid, { Block } from 'react-simple-grid';
import Infinite from 'react-infinite';
import Photo from './components/Photo.js';
import ToTop from './components/ToTop.js';
import api from './api.js';
import { Link } from 'react-router';

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
  // Powered by React Component Data
  static async getData () {
    return await App.getPage('popular', 1);
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
            <Link to={`/about`} style={{ textDecoration: 'none', color: '#FFF', fontSize: '1.3em', backgroundColor: '#ee5459', padding: '5px 9px', borderRadius: '10px' }}>About</Link>
          </div>
        }

        { photos && photos.length > 0 &&
          <span>
            <Grid blocksPerRow={4} spacing={5} breakPoints={photoGridBreakPoints} passBlockWidth={true} hideOuterSpacing={true}>
              { photos.map( photo => <Photo data={photo} key={photo.id} /> )}
            </Grid>
            <Infinite requestHandler={this.getNextPage} atEnd={atEnd} />
          </span>
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
