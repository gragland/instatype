import React from 'react';
import Instatype from 'instatype';
import Unsplash, { toJson }  from 'unsplash-js';
import throttle from 'lodash/throttle';
import ResponsiveGrid from './components/Grid/ResponsiveGrid.js';
import Photo from './components/Photo.js';
import Infinite from './components/Infinite/Infinite.js';
import data from './data.js';

// For Async/Await, Promises, Object.assign, etc
// For smaller file size we could load specific polyfills
import 'babel-polyfill';

// Polyfill fetch (used by Unsplash)
import 'whatwg-fetch';

const unsplash = new Unsplash({ 
  applicationId: '806337d0390512806adf0ab960cb1fbc65b631dfe303a14dcb56432003bd8bfc' 
});

const PHOTOS_PER_PAGE = 16;

const USE_LOCAL_DATA = { 
  users: false,
  userPhotos: false,
  popularPhotos: true
};

class App extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      section: 'popular',
      photos: null,
      username: null,
      page: 1,
      loading: false,
      atEnd: false
    };

    this.getUsersThrottled = throttle(this.getUsers.bind(this), 300);
    this.userSelectedHandler = this.userSelectedHandler.bind(this);
    this.getUserPhotos = this.getUserPhotos.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentDidMount(){
    this.getPage();
  }

  async getPage(){

    const { photos, section, username, page, loading } = this.state;

    if (loading){
      return false;
    }

    console.log(`[APP] Getting page`);

    // Only show main loader if fetching first page
    this.setState({ loading: true });

    let response;
    let nextPhotos;
    
    switch (section){
      case 'popular':
        response = await this.getPopularPhotos(page);
        break;
      case 'user':
        response = await this.getUserPhotos(username, page);
    }

    if (typeof response.json === 'function'){
      nextPhotos = await response.json();
    }else{
      nextPhotos = response; // Local data
    }

    this.setState({
      section: section,
      photos: (photos ? photos.concat(nextPhotos) : nextPhotos),
      username: (section === 'user' ? username : null),
      page: page + 1,
      loading: false,
      atEnd: (nextPhotos.length < PHOTOS_PER_PAGE)
    });
  }

  getPopularPhotos(page){

    if (USE_LOCAL_DATA.popularPhotos && page === 1){
      return data.popular;
    }

    return unsplash.photos.listPhotos(page, PHOTOS_PER_PAGE, 'popular');
  }

  getUserPhotos(username, page){

    if (USE_LOCAL_DATA.userPhotos){
      return data.photos;
    }

    return unsplash.users.photos(username, page, PHOTOS_PER_PAGE, 'latest')
  }

  userSelectedHandler(user){

    // Clear instatype
    // Todo: Give Instatype a clearOnSelect prop
    this.refs.instatype.refs.inputComponent.refs.input.value = '';

    this.setState({
      section: 'user',
      page: 1,
      photos: null,
      username: user.username,
      loading: false
    },() => {
      this.getPage();
    });
  }

  // Our Instatype request handler
  async getUsers(query, limit, callback){

    if (USE_LOCAL_DATA.users){
      callback(this.mapUserProps(data.users.results));
      return;
    }

    const response = await unsplash.search.users(query, 1);
    const json = await response.json();
    const usersWithProps = this.mapUserProps(json.results);

    callback(usersWithProps);
  }

  // Give user objects the props expected by Instatype
  mapUserProps(users){
    return users.map((user) => {
      user.name = user.name; // Already in object
      user.image = user.profile_image.medium; // Optional
      return user;
    });
  }

  render(){

    const { photos, page, loading, atEnd } = this.state;

    // Grid options for different size screens
    const gridBreakPoints = [
      { maxWidth: 400, columns: 2, spacing: 1 },
      { maxWidth: 700, columns: 2, spacing: 2 },
      { maxWidth: 1100, columns: 3 }
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

        { photos && photos.length > 0 &&
          <Infinite requestHandler={this.getPage} atEnd={atEnd}>
            <ResponsiveGrid columns={4} spacing={3} breakPoints={gridBreakPoints} passColumnWidth={true} hideOuterSpacing={true}>
              { photos.map( photo => <Photo data={photo} key={photo.id} /> )}
            </ResponsiveGrid>
          </Infinite>
        }
      
        { photos && photos.length === 0 &&
          <div className='message'>
            This user has no photos 🙁
          </div>
        }

        { loading && page === 1 &&
          <div className='message'>
            Loading ...
          </div>
        }
      </div>
    )
  }
};

export default App;
