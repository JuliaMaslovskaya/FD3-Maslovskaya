import React from 'react';

import ReactDom from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDom.render(
  <RainbowFrame colors={ colors }>
    <h2>Hello!</h2>
  </RainbowFrame>
  , document.getElementById('root')
);