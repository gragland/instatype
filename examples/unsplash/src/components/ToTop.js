import React from 'react';
import ScrollToTop from 'react-scroll-up';

const ToTop = () => {

	const componentStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s'
  };

  const buttonStyle = {
    fontSize: '1.2em', 
    padding: '2em 2.2em', 
    backgroundColor: '#FFF', 
    color: '#5a5a5a'
  };

	return (
    <ScrollToTop showUnder={500} style={componentStyle}>
      <div style={buttonStyle}>UP</div>
    </ScrollToTop>
	);
  
};

export default ToTop;