var React = require('react');
var Result = require('./result.js');

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

module.exports = ResultsComponent;