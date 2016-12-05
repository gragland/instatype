import React from 'react';
import Image from './Image.js';

// Must be a direct child of <ResponsiveGrid> to recieve props.parentColumnWidth

const Photo = ({ data, parentColumnWidth }) => {

	const allowedSrcWidths = [ 200, 300, 400, 500 ];

	return (
	  <a href={data.links.html} target='_blank'>
	    <Image src={`https://source.unsplash.com/${data.id}/{width}x{height}`} parseSrc={true} parseSrcWidth={parentColumnWidth} allowedSrcWidths={allowedSrcWidths} />
	  </a>
	);
  
};

Image.propTypes = {
  data: React.PropTypes.shape({
    links: React.PropTypes.object.required,
    id: React.PropTypes.string.required
  }),
  parentColumnWidth: React.PropTypes.number
};

export default Photo;