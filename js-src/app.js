var React = require('react');
var Functions = require('./functions.js');

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue: '',
      inFocus: false,
      loading: false,
      results: [],
      resultsId: null
    };
  },
  getDefaultProps: function() {
    return {
      limit: 10,
      placeholder: '',
      thumbStyle : 'square',
      loadingIcon : 'images/loading.gif',
      dataKeys : {
        image: 'image',
        name: 'name'
      },
    };
  },
  propTypes: {
    limit: React.PropTypes.number,
    placeholder: React.PropTypes.string,
    thumbStyle: React.PropTypes.oneOf(['circle', 'square']),
    dataKeys: React.PropTypes.object
  },
  loadResultsFromServer: function (query) {
    var app = this;

    var endpoint = app.props.endpoint;

    var requestParams = {
      client_id: app.props.clientId,
      q: query,
      count: app.props.limit
    };

    app.setState({ loading : true });

    Functions.request(endpoint, requestParams, function(data){

      // If inputValue changed prior to request completing don't bother to render
      if (app.state.inputValue != query){
        return false;
      }

      // Get required values from data to display dropdown results
      var renamedData = data.data.map(function(result){
        result.image = result[app.props.dataKeys.image];
        result.name = result[app.props.dataKeys.name];
        return result;
      });

      // Enforce limit here as well
      renamedData = renamedData.slice(0, app.props.limit);

      app.setState({
        results: renamedData,
        resultsId: query,
        loading: false
      });
     
    });
  
  },
  render: function(){
    return (
      <div>
          <InputComponent placeholder={this.props.placeholder} handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur} value={this.state.inputValue} />
          { this.state.results.length > 0 &&
            <ResultsComponent data={this.state.results} resultsId={this.state.resultsId} visible={this.state.inFocus} handleSelect={this.handleSelect} thumbStyle={this.props.thumbStyle} />
          }
          { this.state.loading &&
            <LoadingComponent icon={this.props.loadingIcon} />
          }
      </div>
    );
  },
  handleSelect: function(selectedResult) {
    this.props.onSelect(selectedResult);
    this.clearState();
  },
  handleChange: function(query) {

    var self = this;

    clearTimeout(window.loadResultsTimeout);

    if (query){

      this.setState( { inputValue : query } );

      window.loadResultsTimeout = setTimeout(function(){
        self.loadResultsFromServer(query);
      }, 200);

    }else{

      this.clearState();
    }
      
  },
  handleFocus: function() {
      this.setState( { inFocus : true } );
  },
  handleBlur: function(event) {
      var self = this;
      window.blurTimeout = setTimeout(function(){
          self.setState( { inFocus : false } );
      }, 400);
  },
  clearState: function() {
      this.setState({results : [], resultsId : null, inputValue : '', loading : false});
  }
});

var ResultsComponent = React.createClass({

  handleResultsClick: function(event){
    clearTimeout(window.blurTimeout);
  },
  shouldComponentUpdate: function(nextProps, nextState){
    // Compare visible and resultsId (any unique identifier for the results, such as a query term) so we can prevent uneccesary re-rendering
    return (this.props.visible !== nextProps.visible || 
              this.props.resultsId !== nextProps.resultsId);
  },
  render: function(){
    self = this;

    var resultNodes = this.props.data.map(function(result){
      return (
        <Result image={result.image} handleSelect={self.props.handleSelect} data={result} key={result.id}>
            {result.name}
        </Result>
      );
    });

    var resultsClass = 'results thumb-' + this.props.thumbStyle;
    resultsClass += (this.props.visible === true ? ' show' : ' hide');
    resultsClass += (resultNodes.length === 0 ? ' empty' : ''); 

    return (
      <ul className={resultsClass} onClick={this.handleResultsClick}>
          {resultNodes}
      </ul>
    );
  }
});

var Result = React.createClass({
  handleSelect: function (event) {
    this.props.handleSelect(this.props.data);
  },
  shouldComponentUpdate: function(nextProps, nextState){
    return this.props.data.id !== nextProps.data.id;
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
    shouldComponentUpdate: function(nextProps, nextState){
      return this.props.value !== nextProps.value;
    },
    handleChange: function(event){
      this.props.handleChange(event.target.value);
    },
    handleFocus: function(event){
      this.props.handleFocus(event);
    },
    handleBlur: function(event){
      this.props.handleBlur(event);
    },
    render: function(){
      return (
          <input type="text" placeholder={this.props.placeholder} className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      );
    }
});

var LoadingComponent = React.createClass({
    render: function(){
      return (
          <img className="loading-icon" src={this.props.icon}/>
      );
    }
});

React.render(
  <AppComponent 
    placeholder="Search instagram users" 
    endpoint="https://api.instagram.com/v1/users/search" 
    dataKeys={window.dataKeys}
    clientId={window.instagramClientId} 
    onSelect={Functions.resultSelected} 
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('app')
);