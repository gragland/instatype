import React from 'react';

const ImageWrapper = ({ heightWidthRatio, children }) => {

  const style = { 
    position: 'relative', 
    width: '100%', 
    overflow: 'hidden',
    paddingBottom: heightWidthRatio * 100 + '%' 
  }

  return (
    <div style={style}>
      {children}
    </div>
  );
}

ImageWrapper.defaultProps = {
  heightWidthRatio: 1 // Square
};

ImageWrapper.propTypes = {
  heightWidthRatio: React.PropTypes.number,
  children: React.PropTypes.node
};

export default ImageWrapper;