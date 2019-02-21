import React from 'react';
import HeroElement from './HeroElement';


import './Hero.css';

const Hero = (props) => {
  return (
      <div
        className="hero"
        style={{ backgroundImage: 'url(' + props.random + ')' }}
      >
        {/* used inline style to create background image since it is on state */}
        <div className="header-overlay">
          
            <HeroElement 
              className={props.resultLength > 0 ? "search-result-header" : "hidden"}
              searchHandler={props.searchHandler}
              getReleaseYear={props.getReleaseYear}
              handleChange={props.handleChange}
              randomTitle={props.randomTitle}
              resultLength={props.resultLength}
              searchCriteria={props.searchCriteria}
              searchResults={props.searchResults}
            />
          </div>
        </div>
    );
  }

export default Hero;
