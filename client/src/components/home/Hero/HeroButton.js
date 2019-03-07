import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Hero.css';

const HeroButton = (props) => {
  console.log(props)
    return (
        <div className="call-to-action-buttons">
              <Button className="button" id="hero-button" onClick={props.searchHandler}>
                <Link to={`/search/?q=${props.searchCriteria}`}>{props.buttonLabel}</Link>
              </Button>
              {/* button end */}
        </div>
    );
};

export default HeroButton;