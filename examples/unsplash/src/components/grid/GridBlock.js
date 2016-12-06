import React from 'react';

const Block = ({ width, spacing, children }) => {

  const style = {
    position: 'relative',
    float: 'left',
    width: width, // Should be percent
    paddingLeft: `${spacing/2}px`,
    paddingRight: `${spacing/2}px`,
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box'
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
  
};

Block.propTypes = {
  width: React.PropTypes.string.isRequired,
  spacing: React.PropTypes.number.isRequired,
  children: React.PropTypes.node.isRequired
};


export default Block;
