import React from 'react';

/* Higher order function that passes context.parentColumnWidth to its child component */

export default (WrappedComponent, propName) => {

	// So it's in our HOC functions scope (better way?)
	let childPropName = propName;

  const withColumnWidthHOC = (props, { parentColumnWidth }) => {

  	let newProps = {};
  	childPropName = childPropName || 'parentColumnWidth';
  	newProps[childPropName] = parentColumnWidth;

    return <WrappedComponent {...newProps} {...props} />;
  }

  withColumnWidthHOC.contextTypes = {
    parentColumnWidth: React.PropTypes.number
  };

  return withColumnWidthHOC;
}