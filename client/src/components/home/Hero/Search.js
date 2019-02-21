import React from 'react';
import SearchQueryHeader from './SearchQueryHeader';
import SearchResults from './SearchResults';
import './Hero.css';

const Search = props => {
    return (
      <div className={props.className}>
        <SearchQueryHeader
          headerLabel={props.headerLabel}
          resultLength={props.resultLength}
          searchCriteria={props.searchCriteria}
        />
        <SearchResults
          resultLength={props.resultLength}
          getReleaseYear={props.getReleaseYear}
          searchResults={props.searchResults}
        />
      </div>
    );
};

export default Search;
