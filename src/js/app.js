var React = require('react');
var ResultsComponent = require('./components/results.js');
var InputComponent = require('./components/input.js');
var LoadingComponent = require('./components/loading.js');

require('./../css/style.css');

if (typeof React.initializeTouchEvents == 'function')
  React.initializeTouchEvents(true); // Removed in React 0.14

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
      limit : 10,
      placeholder : 'Search',
      thumbStyle : 'square',
      loadingIcon : '/images/loading.gif',
      // Blur input ontouchstart. 
      // Fixes an phonegap/ios bug where input cursor doesn't show up on focus after previously blurring naturally
      // Don't enable unless experiencing this bug
      blurOnTouchStart : false,
    };
  },
  propTypes: {
    limit: React.PropTypes.number,
    placeholder: React.PropTypes.string,
    thumbStyle: React.PropTypes.oneOf(['circle', 'square']),
    requestHandler: React.PropTypes.func.isRequired,
    selectedHandler: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func
  },
  shouldComponentUpdate: function(nextProps, nextState){
      return (this.state.resultsId !== nextState.resultsId ||
                this.state.loading !== nextState.loading ||
                  this.state.showResults !== nextState.showResults);
  },
  loadResultsFromServer: function (query) {

    this.setState({ loading : true });

    this.props.requestHandler(query, this.props.limit, function(data){

      // If inputValue changed prior to request completing don't bother to render
      if (this.state.inputValue != query){
        return false;
      }

      // Truncate data to specific limit
      data = data.slice(0, this.props.limit);

      this.setState({
        results: data,
        resultsId: query,
        loading: false
      });
     
    }.bind(this));
  
  },
  handleSelect: function(selectedResult) {
    this.props.selectedHandler(selectedResult);
    this.clearState();
  },
  handleChange: function(query) {

    clearTimeout(window.loadResultsTimeout);

    if (query){

      this.setState( { inputValue : query } );

      window.loadResultsTimeout = setTimeout(function(){
        this.loadResultsFromServer(query);
      }.bind(this), 200);

    }else{

      this.clearState();
    }
      
  },
  showResults: function(){

    if (this.state.showResults === false)
      this.setState({ showResults : true });

    // Cancel any pending hide results timeout
    clearTimeout(window.blurHideResultsTimeout); 
  },
  hideResults: function(){

    if (this.state.showResults === true)
      this.setState({ showResults : false });

    // Cancel any pending hide results timeout
    clearTimeout(window.blurHideResultsTimeout); 
  },
  handleFocus: function() {

      this.showResults();
  },

  handleBlur: function(event) {

    // Hide results after a 400ms delay
    // This gives us the ability to keep results open by canceling this timeout
    // TODO: Find a cleaner way to do this
    window.blurHideResultsTimeout = setTimeout(function(){

      this.hideResults(); // Hide

    }.bind(this), 400);

    // Slight timeout so that selectedHandler() gets called before props.onBlur
    // This is important because if props.onBlur causes Instatype component to be removed from DOM ...
    // ... then selectedHandler() will never get called
    if (this.props.onBlur){
      setTimeout(function(){
        this.props.onBlur();
      }.bind(this), 10);
    }

  },
  // Attached to #instatype div onTouchStart
  // Cancels delayed hiding of results (see this.handleBlur) so menu stays open when result tapped and scrolling
  handleTouch: function(){

    // If we are NOT auto-blurring on touch, we need to do it here
    if (this.props.blurOnTouchStart === false)
      this.blurInput();
    
    // Prevents results from hiding
    clearTimeout(window.blurHideResultsTimeout);
  },
  clearState: function() {

      this.setState({results : [], resultsId : null, inputValue : '', loading : false});
  },
  blurInput: function(){

    this.refs.inputComponent.refs.input.getDOMNode().blur();
  },
  componentDidMount: function() {

    // Blur the input when the user touches (ontouchstart) anywhere on the screen.
    // This fixes a nasty bug (on ios in phonegap webview) where a natural blur (due to clicking somewhere on screen) ...
    // ... will result in the input's blinking caret not displaying next time the input is in focus.
    // Triggering a blur manually ontouchstart seems to solve this problem.
    // Capture phase (rather than bubbling phase) so that it's called before any other events
    if (this.props.blurOnTouchStart === true)
      document.addEventListener('touchstart', this.blurInput, true); 
  },
  componentWillUnmount: function(){

    // Cancel timeout or we could end up setting state for component that isn't mounted
    clearTimeout(window.blurHideResultsTimeout);

    if (this.props.blurOnTouchStart === true)
      document.removeEventListener('touchstart', this.blurInput, true);
  },
  render: function(){
    return (
      <div id="instatype" onTouchStart={this.handleTouch}>

        <div className="input-wrapper">
          <InputComponent 
            placeholder={this.props.placeholder} 
            handleChange={this.handleChange} 
            handleFocus={this.handleFocus} 
            handleBlur={this.handleBlur} 
            ref="inputComponent"/>

            { this.state.loading &&
              <LoadingComponent icon={this.props.loadingIcon} />
            }
          </div>
          
          { this.state.showResults && 
            <ResultsComponent 
              data={this.state.results} 
              resultsId={this.state.resultsId} 
              handleSelect={this.handleSelect} 
              thumbStyle={this.props.thumbStyle}/>
          }

      </div>
    );
  },
});


module.exports = InstaTypeComponent;

