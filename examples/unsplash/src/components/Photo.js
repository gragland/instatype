import React from 'react';
import Image from './Image.js';

// Must be a direct child of <ResponsiveGrid> to recieve props.parentColumnWidth

const Photo = ({ data, parentColumnWidth }) => {

	const allowedSrcWidths = [ 200, 300, 400, 500 ];

	return (
	  <a href={data.links.html} target='_blank'>
	    <Image src={`https://source.unsplash.com/${data.id}/{width}x{height}`} parseSrc={true} parseSrcWidth={parentColumnWidth} parseSrcAllowedWidths={allowedSrcWidths} />
	  </a>
	);
  
};

Photo.propTypes = {
  data: React.PropTypes.shape({
    links: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired
  }).isRequired,
  parentColumnWidth: React.PropTypes.number
};

export default Photo;