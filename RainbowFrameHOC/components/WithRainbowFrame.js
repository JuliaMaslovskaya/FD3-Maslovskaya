import React from 'react';

import './RainbowFrame.css';

function WithRainbowFrame(colors) {

  return function(Comp) {
    return props => {
      let rainbowFrame = <Comp>{props.children}</Comp>;
      colors.forEach((item) => {
        rainbowFrame = <div style={{border:"solid 8px "+item, padding:"5px"}}>{rainbowFrame}</div>
        }
      );
      return <div className="frame">{rainbowFrame}</div>;
    }
  }
}

export default WithRainbowFrame;