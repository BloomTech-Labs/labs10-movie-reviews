import React from 'react';
import './Hero.css';

const HeroButton = (props) => {
    return (
        <div className="call-to-action-buttons">
              <div className="button" onClick={props.searchHandler}>
                {props.buttonLabel}
              </div>
              {/* button end */}
        </div>
    );
};

export default HeroButton;