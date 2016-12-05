import React from 'react';

const ImageBlock = ({ heightWidthRatio, children }) => {

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

ImageBlock.defaultProps = {
  heightWidthRatio: 1 // Square
};

ImageBlock.propTypes = {
  heightWidthRatio: React.PropTypes.number,
  children: React.PropTypes.node
};

export default ImageBlock;