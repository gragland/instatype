var React = require('react');
var Result = require('./result.js');

var ResultsComponent = React.createClass({

  shouldComponentUpdate: function(nextProps, nextState){
    if (this.props.resultsId || nextProps.resultsId){ // If we are passing a resultsId (unique identifier for the results)
      return (this.props.resultsId !== nextProps.resultsId); // Return true if resultsId has changed
    }else{
      return true; // Always try to update if we have no resultsId to compare
    }
  },
  render: function(){

    var resultNodes = this.props.data.map(function(result){
      return (
        <Result image={result.image} handleSelect={this.props.handleSelect} data={result} key={result.id}>
            {result.name}
        </Result>
      );
    }.bind(this));
    
    var resultsClass = 'results thumb-' + this.props.thumbStyle;

    return (
      <div className="resultsContainer">

        { this.props.data.length > 0 &&
          <ul className={resultsClass}>
              {resultNodes}
          </ul>
        }

      </div>
    );
  }
});

module.exports = ResultsComponent;