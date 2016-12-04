import React from 'react';
import defaultIcon from './../../../images/loading.svg';

const Loading = ({icon}) => (
  <img className="loading-icon" src={icon}/>
);

Loading.propTypes = {
  loadingIcon: React.PropTypes.string
};

Loading.defaultProps = { 
	icon: defaultIcon 
};

export default Loading;