var React = require('react');
var ResultsComponent = require('./components/results.js');
var InputComponent = require('./components/input.js');
var LoadingComponent = require('./components/loading.js');

React.initializeTouchEvents(true);

var InstaTypeComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue: '',
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
      loadingIcon : '/images/loading.gif'
    };
  },
  propTypes: {
    limit: React.PropTypes.number,
    placeholder: React.PropTypes.string,
    thumbStyle: React.PropTypes.oneOf(['circle', 'square']),
    requestHandler: React.PropTypes.func.isRequired,
    selectedHandler: React.PropTypes.func.isRequired
  },
  shouldComponentUpdate: function(nextProps, nextState){
      return (this.state.resultsId !== nextState.resultsId ||
                this.state.loading !== nextState.loading ||
                  this.state.showResults !== nextState.showResults);
  },
  loadResultsFromServer: function (query) {

    var app = this;

    // TODO: if endpoint specified we should use components own ajax function and add "q" param to endpoint
    //var endpoint = app.props.endpoint;

    app.setState({ loading : true });

    this.props.requestHandler(query, this.props.limit, function(data){

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
  handleSelect: function(selectedResult) {
    this.props.selectedHandler(selectedResult);
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

      clearTimeout(window.blurTimeout);

      if (this.props.focusHandler)
        this.props.focusHandler(true);

      this.setState( { showResults : true } );

      // On focus set the cursor position to the end of input
      // This seems to have fixed an ios bug where the cursor doesn't always show when focused
      /*
      setTimeout(function(){

        var inputRef = this.refs.inputComponent.refs.input.getDOMNode();

        console.log('SELECTION START:' + inputRef.selectionStart);

        if (inputRef.setSelectionRange) // If function exists
          inputRef.setSelectionRange(inputRef.value.length, inputRef.value.length);

      }.bind(this), 1000);
      */
  },

  handleBlur: function(event) {

    console.log('HANDLE BLUR');

    if (this.props.focusHandler)
      this.props.focusHandler(false);

    var self = this;

    window.blurTimeout = setTimeout(function(){
      self.setState({ showResults: false });
    }, 200);

  },
  handleTouchMove: function(){

    this.refs.inputComponent.refs.input.getDOMNode().blur();
    clearTimeout(window.blurTimeout); // Cancel delayed blur so menu stays open

  },
  clearState: function() {

      this.setState({results : [], resultsId : null, inputValue : '', loading : false});
  },
  render: function(){
    return (
      <div id="instatype" onTouchMove={this.handleTouchMove}>

        <div className="input-wrapper">
          <InputComponent 
            placeholder={this.props.placeholder} 
            handleChange={this.handleChange} 
            handleFocus={this.handleFocus} 
            handleBlur={this.handleBlur} 
            ref="inputComponent" />

            { this.state.loading &&
              <LoadingComponent icon={this.props.loadingIcon} />
            }
          </div>
          
          { this.state.results.length > 0 &&
            <ResultsComponent data={this.state.results} resultsId={this.state.resultsId} visible={this.state.showResults} handleSelect={this.handleSelect} thumbStyle={this.props.thumbStyle} />
          }

      </div>
    );
  },
});


module.exports = InstaTypeComponent;

