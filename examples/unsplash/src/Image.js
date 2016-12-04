import React from 'react';
import Wrapper from './ImageWrapper';

const Image = ({ src, heightWidthRatio, children, ...props }) => {

  const imageStyle = {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%'
  };

  return (
    <Wrapper heightWidthRatio={heightWidthRatio}>
      <img src={src} style={imageStyle} {...props} /> 
      {children}
    </Wrapper>
  );
  
};

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  heightWidthRatio: React.PropTypes.number,
  children: React.PropTypes.node
};

module.exports = Image;