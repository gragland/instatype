# instatype
A mobile-friendly React autocomplete component

## Demo
<a href="https://unsplash.now.sh">unsplash.now.sh</a> ([source](https://github.com/gragland/unsplash-demo))

## Install
`npm install instatype --save`

## Contribute
`npm run example` to run the example app with hot loading of instatype source for easy development.

## Usage
```jsx
import React from 'react';
import Instatype from 'instatype';

class Component extends React.Component {

  render() {
    return <Instatype requestHandler={myRequestHandler} selectedHandler={mySelectedHandler}/>;
  }
}
```

## Props

Prop                       |    Description
---------------------------|----------------
`placeholder`              | Placeholder text for input
`limit`                    | Number of results to show in dropdown
`thumbStyle`               | Set result images to "circle" or "square"
`loadingIcon`              | Path to custom loading icon
`requestHandler`           | Required function that fetches data, adds "image" and "name" properties to each object in the response array, and then passes data back to the instatype component. See an example requestHandler function below.
`selectedHandler`              | Required function that is called when a dropdown result is clicked. This will be passed the full object initially used to populate that result in the dropdown.

## Example requestHandler
```js
requestHandlerUsers: function(query, limit, callback){

  $.ajax({
    url: "https://api.instagram.com/v1/users/search",
    dataType: "jsonp",
    data: {
      client_id: this.props.instagramClientId,
      q: query,
      count: limit
    },
    success: function(data) {
      // Instatype expects an "image" and "name" for each result
      var renamedData = data.data.map(function(result){
        result.image = result.profile_picture;
        result.name = result.username;
        return result;
      });
      
      callback(renamedData);
    }
  });

}
```
