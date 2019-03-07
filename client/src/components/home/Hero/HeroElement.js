import React from 'react';
import HeroHeader from './HeroHeader';
import HeroInput from './HeroInput';
import HeroButton from './HeroButton';
import Search from './Search';
import './Hero.css';

const HeroElement = props => {
  return (
    <>
      <HeroHeader appName="CineView" appSlug="Real People. Real Reviews." />
      <div className="landing-page-route-wrapper">
        <HeroInput
          {...props}
          id="hero-input"
          searchHandler={props.searchHandler}
          searchCriteria={props.searchCriteria}
          handleChange={props.handleChange}
          randomTitle={props.randomTitle}
          label="Search for Movies:"
          buttonLabel={<i class="fas fa-search"></i>}
        />
        {/* <HeroButton
          id="hero-button"
          buttonLabel={<i class="fas fa-search"></i>}
          searchCriteria={props.searchCriteria}
          searchHandler={props.searchHandler}
        /> */}
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
