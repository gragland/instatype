import React from 'react';
import Instatype from 'instatype';
import Unsplash from 'unsplash-js';
import throttle from 'lodash/throttle';
import ResponsiveGrid from './components/Grid/ResponsiveGrid.js';
import Photo from './components/Photo.js';
import data from './data.js';

// Polyfill promises
import 'es6-promise/auto';

// Polyfill fetch (used by Unsplash)
import 'whatwg-fetch';

const unsplash = new Unsplash({ 
  applicationId: '806337d0390512806adf0ab960cb1fbc65b631dfe303a14dcb56432003bd8bfc' 
});

const USE_LOCAL_DATA = { popular: true };

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      photos: null,
      loading: false
    };

    this.getUsersThrottled = throttle(this.getUsers.bind(this), 300);
    this.selectedHandler = this.selectedHandler.bind(this);
  }

  componentDidMount(){
    this.getPopular();
  }

  // Our Instatype request handler
  getUsers(query, limit, callback){

    if (USE_LOCAL_DATA.users){
      callback(this.mapUserProps(data.users));
      return;
    }

    unsplash.search.users(query, 1)
    .then((response) => response.json())
    .then((json) => this.mapUserProps(json.results))
    .then((usersWithProps) => callback(usersWithProps));
  }

  // Give user objects the props expected by Instatype
  mapUserProps(users){
    return users.map((user) => {
      user.name = user.name; // Already in object
      user.image = user.profile_image.medium; // Optional
      return user;
    });
  }

  selectedHandler(result){

    if (USE_LOCAL_DATA.photos){
      this.setState({ photos: data.photos });
      return;
    }

    this.setState({ loading: true });

    // Clear instatype
    // Todo: Give Instatype a clearOnSelect prop
    this.refs.instatype.refs.inputComponent.refs.input.value = '';

    unsplash.users.photos(result.username)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        photos: json,
        loading: false
      });
    });
  }

  
  getPopular(){

    if (USE_LOCAL_DATA.popular){
      this.setState({ photos: data.popular });
      return;
    }

    this.setState({ loading: true });

    unsplash.photos.listPhotos(1, 16, "popular")
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        photos: json,
        loading: false
      })
    });
  }

  render(){

    const { photos, loading } = this.state;

    // Grid options for different size screens
    const gridBreakPoints = [
      { maxWidth: 400, columns: 2, spacing: 1 },
      { maxWidth: 700, columns: 2, spacing: 2 },
      { maxWidth: 1100, columns: 3 }
    ];

    return(
      <div>
        <div id='navbar'>
          <Instatype 
            placeholder='Search Unsplash' 
            requestHandler={this.getUsersThrottled}
            selectedHandler={this.selectedHandler}
            limit={10} 
            thumbStyle='circle'
            ref='instatype'/>
        </div>

        { photos && photos.length > 0 && !loading &&
          <ResponsiveGrid columns={4} spacing={3} breakPoints={gridBreakPoints} passColumnWidth={true} hideOuterSpacing={true}>
            { photos.map( photo => <Photo data={photo} key={photo.id} /> )}
          </ResponsiveGrid>
        }
      
        { photos && photos.length === 0 && !loading &&
          <div style={messageStyle}>
            This user has no photos 🙁
          </div>
        }

        { loading &&
          <div style={messageStyle}>
            Loading ...
          </div>
        }
      </div>
    )
  }
};

const messageStyle = {
  marginTop: '2em', 
  textAlign: 'center', 
  fontSize: '2em', 
  color: '#6e6e6e'
}

export default App;
