var React = require('react');
var CustomFunctions = require('./custom-functions.js');

React.initializeTouchEvents(true);

//CustomFunctions.resultSelected( { id : 478987666 } );

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue: '',
      inputFocused: false, // Does the input currently have focus?
      inputTriggerBlur: false, // Will manually trigger blur() event on input
      showResults: false, // Show or hide the ResultsComponent
      loading: false, // Are we currently loading data from server?
      results: [],
      resultsId: null // Unique identifier for set of results (used by ResultsComponent.shouldComponentUpdate)
    };
  },

  getDefaultProps: function() {
    return {
      text : false,
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
  /*
  componentDidMount: function() {
    //window.addEventListener('scroll', this.do_something);
  },
  */
  loadResultsFromServer: function (query) {
    var app = this;

    var endpoint = app.props.endpoint;

    var requestParams = CustomFunctions.getRequestParams(query, app.props);

    app.setState({ loading : true });

    CustomFunctions.requestResults(endpoint, requestParams, function(data){

      // If inputValue changed prior to request completing don't bother to render
      if (app.state.inputValue != query){
        return false;
      }

      // Enforce limit here as well
      data = data.slice(0, app.props.limit);

      app.setState({
        results: data,
        resultsId: query,
        loading: false
      });
     
    });
  
  },
  render: function(){
    return (
      <div onTouchMove={this.handleTouchMove}>
          <InputComponent triggerBlur={this.state.inputTriggerBlur} placeholder={this.props.placeholder} handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur} value={this.state.inputValue} />
          { this.state.results.length > 0 &&
            <ResultsComponent data={this.state.results} resultsId={this.state.resultsId} visible={this.state.showResults} handleSelect={this.handleSelect} thumbStyle={this.props.thumbStyle} />
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
      this.setState( { showResults : true, inputFocused: true } );
  },
  handleBlur: function(event) {

      // Hide results because input no longer has focus
      // We only don't hide if we manually triggered the blur event ...
      // ... which is used to hide keyboard on mobile when scrolling (easier to see results)
      if (this.state.inputTriggerBlur === false){
        var self = this;
        window.blurTimeout = setTimeout(function(){

            if (self.state.inputFocused == false) // Make sure it's still not focused after timeout
              self.setState( { showResults : false } );
            
        }, 400);
      }

      this.setState( { inputFocused : false, inputTriggerBlur: false } );
  },
  handleTouchMove: function(){

    // When scrolling on a touch device ...
    // If the input is focused we want to trigger blur so that keyboard hides
    if (this.state.inputFocused === true){
      this.setState( { inputTriggerBlur : true } );
    }

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
      return (this.props.value !== nextProps.value || 
                this.props.triggerBlur !== nextProps.triggerBlur);
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
    triggerBlur: function(){
      React.findDOMNode(component).blur();
    },
    componentDidUpdate: function(){
      // Passing props.triggerBlur = true causes blur() to be called on input after render
      // Useful if we need to force input to no longer be in focus
      // IMPORTANT: handleBlur() passed down from parent component should ...
      // ... change props.triggerBlur back to false or input will never be able to regain focus.
      if (this.props.triggerBlur === true){
        React.findDOMNode(this.refs.inputTypeahead).blur();
      }
    },
    render: function(){
      return (
          <input type="text" placeholder={this.props.placeholder} ref="inputTypeahead" className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
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
    onSelect={CustomFunctions.resultSelected} 
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('app')
);