# instatype
Simple React Typeahead

## Demo
<a href="http://gragland.github.io/instatype/examples/instagram">http://gragland.github.io/instatype/examples/instagram</a>

## Install
`npm install instatype`

## Usage
    var Instatype = require('instatype');
    
    React.render(
        <Instatype requestHandler={myRequestHandler} selectedHandler={mySelectedHandler}/>,
        document.getElementById('app')
    );

If using Webpack make sure to include the style-loader in your webpack config:

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader?harmony']}
        ]
    }

## Props

Prop                       |    Description
---------------------------|----------------
`placeholder`              | Placeholder text for input
`limit`                    | Number of results to show in dropdown
`thumbStyle`               | Set result images to "circle" or "square"
`loadingIcon`              | Path to custom loading icon
`requestHandler`           | Required function that fetches data, adds "image" and "name" fields to all response objects, and then passes data back to instatype component. See an example requestHandler function below.
`selectedHandler`              | Required function that is called when a dropdown result is clicked. This will be passed the full object initially used to populate that result in the dropdown.

## Example requestHandler
Data fetching is done by a custom function that you pass in via the `requestHandler` prop. This way you can use your preferred ajax library and alter the response data client-side before passing it to instatype. After fetching data make sure to give each object a "name" and optional "image" value, and then pass the final data to callback() to populate the instatype component. Here's an example.

```
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
