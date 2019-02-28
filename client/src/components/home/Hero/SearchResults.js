import React from 'react';
import ResultCard from './ResultCard';
import { Link } from 'react-router-dom';

const SearchResults = props => {
    return (
      <div className="search-results-container">
        {props.searchResults.map(result => {
          return (
            //saving index on result-card so that index is available to query movie details information
            //TODO: Query movie details information so that each movie can have it's own profile page.
            <Link to={`/moviereviews/${result.id}`} className="linksMovie">
              <ResultCard
                result={result}
                releaseYear={props.getReleaseYear}
                index={result.id}
                key={result.id}
              />
            </Link>
          );
        })}
      </div>
    );
};

export default SearchResults;
