import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroButton = (props) => {
  console.log(props)
    return (
        <div className="call-to-action-buttons">
              <div className="button" onClick={props.searchHandler}>
                <Link to={`/search/?q=${props.searchCriteria}`}>{props.buttonLabel}</Link>
              </div>
              {/* button end */}
        </div>
    );
};

export default HeroButton;