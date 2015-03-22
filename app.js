// https://api.instagram.com/v1/users/search?access_token=291933.1fb234f.49bb69d84df4458dafeb45262b722d2a&q=gabe
var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      results: [
        {
          image : 'http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/142642156144625.jpg',
          username : 'Gabe'
        },
        {
          image : 'http://40.media.tumblr.com/37a9787b9352ba10c2dfc8916813a71f/tumblr_nkth875MO41qjqyo8o1_500.jpg',
          username : 'Irvin'
        }
      ]
    };
  },
  loadResultsFromServer: function (query) {
    $.ajax({
      url: this.props.endpoint,
      dataType: 'json',
      success: function(data) {
        console.log('data received');
        var renamedData = _.map(data.data, function (result) {
          result.image = result.profile_picture;
        });
        this.setState({results: renamedData});
      }
    });
  },
  componentDidMount: function () {
    console.log('component rendered');
    //this.loadResultsFromServer();
  },
  render: function(){

    return (
        <div>
        <InputComponent handleChange={this.handleChange}/>
        <ResultsComponent data={this.state.results}/>
        </div>
    );
  },
  handleChange: function(data) {
    this.setState( { results: data } );
  }
});


var ResultsComponent = React.createClass({

  render: function(){

    var resultNodes = this.props.data.map(function(result){
      console.log(result);
      return (
          <Result image={result.image}>
          {result.username}
        </Result>
      );
    });

    return (
        <ul>
        {resultNodes}
      </ul>
    );
  }
});


var Result = React.createClass({

  render: function(){

    return (
        <li>
        <img width="30" src={this.props.image}/>
        {this.props.children}
      </li>
    );
  }
});


var InputComponent = React.createClass({
  handleChange: function(event){
    this.props.handleChange(event.target.value);
  },
  render: function(){
    return (
        <input type="text" value={this.props.name} onChange={this.handleChange} />
    );
  }
});

React.render(
  <AppComponent endpoint="https://api.instagram.com/v1/users/search?access_token=291933.1fb234f.49bb69d84df4458dafeb45262b722d2a&q=gabe" />,
  document.getElementById('mount-point')
);
