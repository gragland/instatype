import React from 'react';
import Image from './Image/Image.js';
import { PassBlockWidth } from 'react-simple-grid';

const Photo = ({ data, parentWidth }) => {

	const allowedSrcWidths = [ 200, 300, 400, 500 ];

	return (
	  <a href={data.links.html} target='_blank' style={{ display: 'block', background: hexToRGB(data.color, 0.7) }}>
	    <Image 
        src={`https://source.unsplash.com/${data.id}/{width}x{height}`} 
        parseSrc={true} 
        parseSrcWidth={parentWidth} 
        parseSrcAllowedWidths={allowedSrcWidths} 
        parseSrcDoubleForRetina={true} />
      <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: '#fff', color: '#000', padding: '0.3em 0.6em', opacity: '1' }}>
        {parentWidth}px
      </div>
	  </a>
	);
  
};

Photo.propTypes = {
  data: React.PropTypes.shape({
  	id: React.PropTypes.string.isRequired,
    links: React.PropTypes.shape({
    	html: React.PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  width: React.PropTypes.number,
  parentWidth: React.PropTypes.number
};

function hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return `rgba(${r},${g},${b},${alpha})`;
    } else {
        return `rgba(${r},${g},${b})`;
    }
}

// HOC that gives us <Grid> column width as the prop parentWidth
export default PassBlockWidth(Photo, 'parentWidth');