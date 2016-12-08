import React from 'react';
import Instatype from 'instatype';
import throttle from 'lodash/throttle';
import ResponsiveGrid from './components/Grid/ResponsiveGrid.js';
import Photo from './components/Photo.js';
import Infinite from './components/Infinite/Infinite.js';
import api from './api.js';

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

    this.setState({ loading: true });

    let response;
    let nextPhotos;
    
    switch (section){
      case 'popular':
        nextPhotos = await api.getPopularPhotos(page);
        break;
      case 'user':
        nextPhotos = await api.getUserPhotos(username, page);
    }

    this.setState({
      section: section,
      photos: (photos ? photos.concat(nextPhotos) : nextPhotos),
      username: (section === 'user' ? username : null),
      page: page + 1,
      loading: false,
      atEnd: (nextPhotos.length < api.photosPerPage)
    });
  }

  // Instatype request handler
  async getUsers(query, limit, callback){

    const users = await api.getUsers(query);

    console.log(query);

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
      page: 1,
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
