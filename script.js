window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';
// Tells component where to find the values it needs from json returned by endpoint
window.dataKeys = {
  image: 'profile_picture',
  name: 'username'
}

// Displays grid of images
var GridComponent = React.createClass({

  render: function(){
    var resultNodes = this.props.data.map(function(result){
        return (<img src={result.image} key={result.id} />);
    });

    return (
        <div>
            {resultNodes}
        </div>
    );
  }
});

// Callback: Function called when result is clicked
function processResult(result) {

  var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

  $.ajax({
    url: endpoint,
    data: {
      client_id: window.instagramClientId,
      count: 20
    },
    dataType: 'jsonp',
    success: function(data) {
      var gridItems = _.map(data.data, function (result) {
        result.image = result.images.low_resolution.url;
        return result;
      });
      React.render(
        <GridComponent data={gridItems} />,
        document.getElementById('grid')
      );
    }
  });
}


