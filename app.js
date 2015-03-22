window.instagramClientId = '02d26cb819954ba7b5c3c072a885759f';


var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue : '',
      inFocus: false,
      results: []
    };

  },
  loadResultsFromServer: function (query) {
    var appcomponent = this;
    $.ajax({
      url: this.props.endpoint,
      data: {
        client_id: this.props.clientId,
        q: query,
        count: this.props.limit
      },
      dataType: 'jsonp',
      success: function(data) {
        var renamedData = _.map(data.data, function (result) {
          result.image = result.profile_picture;
          return result;
        });
        appcomponent.setState({results: renamedData});
      }
    });
  },
  componentDidMount: function () {
    this.loadResultsFromServer();
  },
  render: function(){
        return (
            <div>
                <InputComponent handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur} value={this.state.inputValue}/>
                <ResultsComponent data={this.state.results} visible={this.state.inFocus} handleSelect={this.handleSelect} />
            </div>
        );
    },
  handleSelect: function(selectedResult) {
    this.props.onSelect(selectedResult);
    this.setState({results : [], inputValue : ''});
  },
    handleChange: function(query) {
      this.loadResultsFromServer(query);
      this.setState( { inputValue : query } );
    },
    handleFocus: function() {
        this.setState( { inFocus : true } );
    },
    handleBlur: function(event) {
        var self = this;
        window.blurTimeout = setTimeout(function(){
            self.setState( { inFocus : false } );
        }, 1000);
    }
});


var ResultsComponent = React.createClass({

  handleResultsClick: function(event){
    //console.log('results click');
    clearTimeout(window.blurTimeout);
  },

  render: function(){
    self = this;
        var resultNodes = this.props.data.map(function(result){
            return (
                <Result image={result.image} handleSelect={self.props.handleSelect} data={result}>
                    {result.username}
                </Result>
            );
        });

        var resultsClass = (this.props.visible === true ? 'results show' : 'results hide');

        // If no results give .empty class
        if (resultNodes.length === 0)
            resultsClass += ' empty';

        console.log(resultsClass);

        return (
            <ul className={resultsClass} onClick={this.handleResultsClick}>
                {resultNodes}
            </ul>
        );
    }
});


var Result = React.createClass({
  handleSelect: function (event) {
    console.log('clicked');
    this.props.handleSelect(this.props.data);
  },
  render: function(){

    return (
        <li className="clearfix" onClick={this.handleSelect}>
            <img src={this.props.image}/>
            <div>{this.props.children}</div>
        </li>
    );
  }
});


var InputComponent = React.createClass({
    handleChange: function(event){
        this.props.handleChange(event.target.value);
    },
    handleFocus: function(event){
        this.props.handleFocus(event);
    },
    handleBlur: function(event){
        //this.props.handleBlur(event);
    },
    render: function(){
        return (
            <input type="text" className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        );
    }
});

var GridComponent = React.createClass({

    render: function(){

        var resultNodes = this.props.data.map(function(result){
            return (<img src={result.image} />);
        });

        return (
            <div>
                {resultNodes}
            </div>
        );
    }
});

function processResult(result) {
  console.log('process result called');
  console.log(result);

    var endpoint = "https://api.instagram.com/v1/users/" + result.id + "/media/recent";

    $.ajax({
      url: endpoint,
      data: {
        access_token: window.instagramClientId,
        count: 20
      },
      dataType: 'jsonp',
      success: function(data) {
        var imageUrls = _.map(data.data, function (result) {
          result.image = result.images.low_resolution.url;
          return result;
        });
        React.render(
          <GridComponent data={imageUrls} clientId="02d26cb819954ba7b5c3c072a885759f"/>,
          document.getElementById('grid')
        );
      }
    });
}

React.render(
  <AppComponent endpoint="https://api.instagram.com/v1/users/search" clientId={window.instagramClientId} onSelect={processResult} limit={10}/>,
  document.getElementById('mount-point')
);
