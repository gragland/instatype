var React = require('react');
var Helmet = require('react-helmet');

var NotFoundComponent = React.createClass({
  render(){
    return (
      <div>
      	<Helmet title="Page not found" />
        Oops.. That page could not be found.
      </div>
    );
  }
});

module.exports = NotFoundComponent;