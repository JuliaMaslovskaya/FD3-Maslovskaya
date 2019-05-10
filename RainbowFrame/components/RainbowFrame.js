import React from 'react';
import PropTypes from 'prop-types';
import './RainbowFrame.css';

const RainbowFrame = (props) => {  
  let {children, colors} = props;

  for (let i = 0; i < colors.length; i++) {
    children = <div className="frame" style={{border: 'solid 8px ' + colors[i]}}>{children}</div>
  }
    
  return children;
}

RainbowFrame.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default RainbowFrame;