import React from 'react';
import Resolver from './Resolver.js';
import resolve from './resolve.js';

// JOB: Make data available via context and by rendering script tag to DOM
// The direct child must be <Router> or <RouterContext>
// It supplies <Router> with createElement(), which supplies the app component with an HOC.

// HOC immediately gets data via context for server-render and re-hydrates from script tag on client-render
// HOC will call Component.getInitialProps() if no data to re-hydrate from (navigated to the route client-side or disabled server data fetching)

class ComponentData extends React.PureComponent {

	getChildContext () {
    return {
      data: this.props.data || null
    };
  }

  render(){

    const { data, children } = this.props;

	 	const Router = React.cloneElement(
	 		React.Children.only(children), 
	 		{ createElement: createElement() }
	  );

    return (
      <span>
        {Router}

        { data &&
          <script id='REACT_COMPONENT_DATA_PAYLOAD' type='application/json' dangerouslySetInnerHTML={{__html: safeStringify(data)}}></script>
        }
      </span>
    );
  }
};

ComponentData.childContextTypes = {
  data: React.PropTypes.object
};

// React Router prop that wraps each route component with our HOC
function createElement() {
  return function(Component, props) {
    return (
    	<Resolver key={props.location.key}>
    		<Component {...props} />
    	</Resolver>
    )
  }
}

function safeStringify(obj){
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

export default ComponentData;
export { resolve };
