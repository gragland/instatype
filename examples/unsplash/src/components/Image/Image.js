import React from 'react';
import Block from './ImageBlock';

const Image = ({ src, heightWidthRatio, parseSrc, parseSrcWidth, parseSrcAllowedWidths, children, ...props }) => {

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
    if (parseSrcAllowedWidths){
      parseSrcWidth = nextHighestNumber(parseSrcAllowedWidths, parseSrcWidth, true, true);
    }

    src = src.replace(/\{width\}/g, parseInt(parseSrcWidth))
    src = src.replace(/\{height\}/g, parseInt(parseSrcWidth * heightWidthRatio));
  }

  const style = {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%'
  };

  return (
    <Block heightWidthRatio={heightWidthRatio}>
      { (!parseSrc || parseSrcWidth) && 
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
  parseSrcAllowedWidths: React.PropTypes.arrayOf(React.PropTypes.number),
  children: React.PropTypes.node
};

Image.defaultProps = {
  heightWidthRatio: 1 // Square
};

/**
 * Find the next equal or higher number within an array
 * @arr {array} Array to iterate through.
 * @num {number} Number to compare.
 * @returnEqual {boolean} Return an equal number if found.
 * @returnLast {boolean} Return last number if no equal or higher one found.
 * @prop {string} Indicates @arr contains objects. Get number from object[prop].
 */
export function nextHighestNumber(arr, num, returnEqual, returnLast, prop){
  let i = 0;
  for (i=0; i<arr.length; i++){
    let arrNum = (prop ? arr[i][prop] : arr[i]);
    if (returnEqual && arrNum === num){
      return arr[i];
    }else
    if (arrNum >= num){
      return arr[i];
    }
  }
  if (returnLast){
    return arr[i-1];
  }else{
    return false;
  }
}

export default Image;
