import React from 'react';
import Block from './ImageBlock';

const Image = ({ src, heightWidthRatio, parseSrc, parseSrcWidth, allowedSrcWidths, children, ...props }) => {

  /** If src parsing is enabled ...
    * We replace width and height in src url
    * Skip rendering <img> if no props.parseSrcWidth (may be delayed depending on parent logic)
    * Always render <block> so that component has correct width and height
    * Example valid src urls:
    *  - https://source.unsplash.com/oMpAz-DN-9I/{width}x{height}
    *  - https://example.com/images/logo_{width}.png 
  */

  if (parseSrc && parseSrcWidth) {

    // Snap parseSrcWidth to next largest width in allowedSrcWidths (wont upscale)
    // If allowedSrcWidths doesn't contain a larger width then it will be largest available
    if (allowedSrcWidths){
      parseSrcWidth = getNextHighestNumber(allowedSrcWidths, parseSrcWidth);
    }

    src = src.replace(/\{width\}/g, parseInt(parseSrcWidth))
    src = src.replace(/\{height\}/g, parseInt(parseSrcWidth*heightWidthRatio));
  }

  const style = {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%'
  };

  return (
    <Block heightWidthRatio={heightWidthRatio}>
      { !parseSrc || parseSrcWidth && 
        <img src={src} style={style} {...props} /> 
      }
      {children}
    </Block>
  );
  
};

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  heightWidthRatio: React.PropTypes.number,
  parseSrc: React.PropTypes.bool,
  parseSrcWidth: React.PropTypes.number,
  children: React.PropTypes.node
};

Image.defaultProps = {
  heightWidthRatio: 1 // Square
};

function getNextHighestNumber(arr, num){
    let i = 0;
    for (i=0; i<arr.length; i++){
      if (arr[i] >= num){
        return arr[i];
      }
    }
    // Return last item if none equal or larger
    return arr[i-1];
}

module.exports = Image;
