import React from 'react';
import './Hero.css';

const SearchQueryHeader = (props) => {

    const searchResultsLength = () => {
        if(props.resultLength === 0) {
            return "No movies available with that search term. Check your spelling or try a new search!"
        }
        else if(props.resultLength === 1) {
            return props.resultLength + ' result';
        }
        else {
            return props.resultLength + ' results';
        }
    }
    return (
        <h1 className={props.className}>
            <div className="search-results-query">
                  <h5 className="search-label">{props.headerLabel}</h5> 
                  <div className="search-results-length">
                    <h5 className="query"> {props.searchCriteria}</h5>
                    <h5 className="result-length">({searchResultsLength()})</h5>
                  </div>
            </div>
        </h1>
    );
};

export default SearchQueryHeader;