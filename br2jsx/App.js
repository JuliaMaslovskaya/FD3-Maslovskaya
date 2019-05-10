import React from 'react';
import ReactDom from 'react-dom';

import BR2JSX from './components/BR2JSX';

let text="первый<br>второй<br/>третий<br />последний";

ReactDom.render(
  <BR2JSX text={ text } />
  , document.getElementById('root')
);