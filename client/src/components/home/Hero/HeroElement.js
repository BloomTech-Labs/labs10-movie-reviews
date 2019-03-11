import React from 'react';
import HeroHeader from './HeroHeader';
import HeroSearch from './HeroSearch';
import Search from './Search';
import './Hero.css';

const HeroElement = props => {
  return (
    <>
      <HeroHeader appName="CineView" appSlug="Real People. Real Reviews." />
      <div className="landing-page-route-wrapper">
        <HeroSearch
          {...props}
          id="hero-input"
          searchHandler={props.searchHandler}
          searchCriteria={props.searchCriteria}
          handleChange={props.handleChange}
          randomTitle={props.randomTitle}
          label="Search for Movies:"
          buttonLabel={<i className="fas fa-search"></i>}
        />
      </div>

        <Search 
            className={props.className}
            getReleaseYear={props.getReleaseYear}
            headerLabel="Search Results:"
            resultLength={props.resultLength}
            searchCriteria={props.searchCriteria}
            searchResults={props.searchResults}
        />
    </>
  );
};

export default HeroElement;
