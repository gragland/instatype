import React from 'react';

const ImageBlock = ({ widthHeightRatio, children }) => {

  const style = { 
    position: 'relative', 
    width: '100%', 
    overflow: 'hidden',
    paddingBottom: 100 / widthHeightRatio + '%' 
  }

  return (
    <div style={style}>
      {children}
    </div>
  );
}

ImageBlock.defaultProps = {
  widthHeightRatio: 1
};

ImageBlock.propTypes = {
  widthHeightRatio: React.PropTypes.number,
  children: React.PropTypes.node
};

export default ImageBlock;
