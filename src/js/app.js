var React = require('react');
var ResultsComponent = require('./components/results.js');
var InputComponent = require('./components/input.js');
var LoadingComponent = require('./components/loading.js');

React.initializeTouchEvents(true);

var InstaTypeComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue: '',
      inputFocused: false, // Does the input currently have focus?
      inputTriggerFocus: false, // Will manually trigger focus() event on input
      inputTriggerBlur: false, // Will manually trigger blur() event on input
      showResults: false, // Show or hide the ResultsComponent
      loading: false, // Are we currently loading data from server?
      results: [],
      resultsId: null // Unique identifier for set of results (used by ResultsComponent.shouldComponentUpdate)
    };
  },
  componentWillReceiveProps: function(nextProps){

    if ( (typeof nextProps.inputTriggerFocus !== 'undefined' && this.state.inputTriggerFocus != nextProps.inputTriggerFocus) ||
          (typeof nextProps.inputTriggerBlur !== 'undefined' && this.state.inputTriggerBlur != nextProps.inputTriggerBlur)) {

      //alert(this.state.inputTriggerFocus + ' / ' + nextProps.inputTriggerFocus);
      //alert(this.state.inputTriggerBlur + ' / ' + nextProps.inputTriggerBlur);

      this.setState({
        inputTriggerFocus: nextProps.inputTriggerFocus,
        inputTriggerBlur: nextProps.inputTriggerBlur
      });
    }

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
  render: function(){
    return (
      <div onTouchMove={this.handleTouchMove}>
          <InputComponent triggerFocus={this.state.inputTriggerFocus} triggerBlur={this.state.inputTriggerBlur} placeholder={this.props.placeholder} handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur} value={this.state.inputValue} />
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
      this.setState( { showResults : true, inputFocused: true, inputTriggerFocus: false  } );
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


module.exports = InstaTypeComponent;

