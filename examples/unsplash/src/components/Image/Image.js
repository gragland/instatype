import React from 'react';
import Block from './ImageBlock';

const Image = ({ src, widthHeightRatio, parseSrc, parseSrcWidth, parseSrcAllowedWidths, parseSrcDoubleForRetina, children, ...props }) => {

  /** If src parsing is enabled ...
    * We replace width and height in src url
    * Skip rendering <img> if no props.parseSrcWidth (may be delayed depending on parent logic)
    * Always render <block> so that component has correct width and height
    * Example valid src urls:
    *  - https://source.unsplash.com/oMpAz-DN-9I/{width}x{height}
    *  - https://example.com/images/logo_{width}.png 
    */

  if (parseSrc && parseSrcWidth) {

    if (parseSrcDoubleForRetina && isHighDensity()) {
      // Double image width for high density screens (1.3 or 2dpi)
      parseSrcWidth = parseSrcWidth * 2;
    }

    // Snap parseSrcWidth to next largest width in allowedSrcWidths (wont upscale)
    // If allowedSrcWidths doesn't contain a larger width then it will be largest available
    if (parseSrcAllowedWidths){
      parseSrcWidth = nextHighestNumber(parseSrcAllowedWidths, parseSrcWidth, true, true);
    }

    src = src.replace(/\{width\}/g, parseInt(parseSrcWidth))
    src = src.replace(/\{height\}/g, parseInt(parseSrcWidth / widthHeightRatio));
  }

  const style = {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%'
  };

  return (
    <Block widthHeightRatio={widthHeightRatio}>
      { (!parseSrc || parseSrcWidth) && 
        <img src={src} style={style} {...props} /> 
      }
      <div style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#fff', color: '#000', padding: '0.3em 0.6em', opacity: '0.6' }}>
        Img: {parseSrcWidth}px { parseSrcDoubleForRetina && isHighDensity() && <span>(@2x)</span> }
      </div>
      {children}
    </Block>
  );
  
};

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  widthHeightRatio: React.PropTypes.number,
  parseSrc: React.PropTypes.bool,
  parseSrcWidth: React.PropTypes.number,
  parseSrcAllowedWidths: React.PropTypes.arrayOf(React.PropTypes.number),
  parseSrcDoubleForRetina: React.PropTypes.bool,
  children: React.PropTypes.node
};

Image.defaultProps = {
  widthHeightRatio: 1, // Square
  parseSrcDoubleForRetina: true
};

/**
 * Check whether screen is high density (1.3 or 2dpi)
 * From http://stackoverflow.com/a/20413768/56976
 */
function isHighDensity(){
    if (typeof window === 'undefined') return false;
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}

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
