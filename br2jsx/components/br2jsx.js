import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

const BR2JSX = props => {
  const textElems = props.text.split(/<br\s?\/?>/);
  const arr = [];

  for (let i = 0; i < textElems.length; i++) {
    if (i) arr.push(<br key={i}/>);
    arr.push(textElems[i]);
  }

  return <div className='br2jsx'>{arr}</div>
}

BR2JSX.propTypes = {
  text: PropTypes.string.isRequired,
}

export default BR2JSX;