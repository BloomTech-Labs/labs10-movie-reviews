import React from 'react';
import { Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroSearch = (props) => {
    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById('hero-button').click();
          props.history.push(`/search?q=${props.searchCriteria}`)
        }
      }
    return (
            <>
            <Input
                onKeyUp={handleKeyUp}
                onSubmit={props.searchHandler}
                onChange={props.handleChange}
                className="landing-input"
                type="text"
                name="searchCriteria"
                value={props.searchCriteria}
                placeholder={props.randomTitle}
                id="hero-input"
            />
            <div id="hero-button" onClick={props.searchHandler}>
            <Link to={`/search/?q=${props.searchCriteria}`}>
              <Button className="button" onClick={props.searchHandler}>
                {props.buttonLabel}
              </Button>
            </Link>
            </div>
          </>
    );
};

export default HeroSearch;