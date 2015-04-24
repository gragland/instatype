var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      inputValue: '',
      inFocus: false, 
      results: []
    };

  },
  getDefaultProps: function() {
    return {
      limit: 10,
      placeholder: '',
      thumbStyle : 'square',
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

    $.ajax({
      url: this.props.endpoint,
      data: {
        client_id: this.props.clientId,
        q: query,
        count: this.props.limit
      },
      dataType: 'jsonp',
      success: function(data) {

        // If inputValue changed prior to ajax request completing don't bother to render
        if (app.state.inputValue != query){
          return false;
        }

        //console.log(query);

        // Get required values from data to display dropdown results
        var renamedData = _.map(data.data, function (result) {
          result.image = result[app.props.dataKeys.image];
          result.name = result[app.props.dataKeys.name];
          return result;
        });

        // Enforce limit here as well
        renamedData = renamedData.slice(0, app.props.limit);

        app.setState({results: renamedData});
      }
    });
  },
  componentDidMount: function () {
    //this.loadResultsFromServer();
  },
  render: function(){
    return (
      <div>
          <InputComponent placeholder={this.props.placeholder} handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur} value={this.state.inputValue}/>
          <ResultsComponent data={this.state.results} visible={this.state.inFocus} handleSelect={this.handleSelect} thumbStyle={this.props.thumbStyle} />
      </div>
    );
  },
  handleSelect: function(selectedResult) {
    this.props.onSelect(selectedResult);
    this.setState({results : [], inputValue : ''});
  },
  handleChange: function(query) {

    var self = this;

    clearTimeout(window.loadResultsTimeout);
    
    this.setState( { inputValue : query } );

    if (query){

      window.loadResultsTimeout = setTimeout(function(){
        self.loadResultsFromServer(query);
      }, 200);

    }else{

      this.setState({results: []});
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
  }
});

var ResultsComponent = React.createClass({

  handleResultsClick: function(event){
    clearTimeout(window.blurTimeout);
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

      var resultsClass = (this.props.visible === true ? 'results show' : 'results hide');

      // If no results give .empty class
      if (resultNodes.length === 0)
        resultsClass += ' empty';

      resultsClass += ' thumb-' + this.props.thumbStyle;

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
      this.props.handleBlur(event);
    },
    render: function(){
      return (
          <input type="text" placeholder={this.props.placeholder} className="input-typeahead" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      );
    }
});

React.render(
  <AppComponent 
    placeholder="Search instagram users" 
    endpoint="https://api.instagram.com/v1/users/search" 
    dataKeys={window.dataKeys}
    clientId={window.instagramClientId} 
    onSelect={processResult} 
    limit={6} 
    thumbStyle="circle"/>,

  document.getElementById('app')
);
