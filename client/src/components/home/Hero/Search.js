import React from 'react';
import SearchQueryHeader from './SearchQueryHeader';
import SearchResults from './SearchResults';
import './Hero.css';

const Search = props => {
  if ((props.resultLength === null || props.resultLength === 0) && props.) {
    return <div className="search-results-header">"No results available. Please try another query."</div>;
  } else {
    return (
      <div className="search-results-header">
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
  }
};

export default Search;
