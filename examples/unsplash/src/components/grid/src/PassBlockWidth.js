import React from 'react';

/* Higher order function that passes context.parentBlockWidth to its child component */

export default (WrappedComponent, propName) => {

	// So it's in our HOC functions scope (better way?)
	let childPropName = propName;

  const withColumnWidthHOC = (props, { parentBlockWidth }) => {

  	let newProps = {};
  	childPropName = childPropName || 'parentBlockWidth';
  	newProps[childPropName] = parentBlockWidth;

    return <WrappedComponent {...newProps} {...props} />;
  }

  withColumnWidthHOC.contextTypes = {
    parentBlockWidth: React.PropTypes.number
  };

  return withColumnWidthHOC;
}