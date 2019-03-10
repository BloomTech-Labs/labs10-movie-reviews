import React from 'react';
import { tmdbUrl, viaPlaceholderUrl } from '../../../services/resourceURLs';

const ResultCard = props => {
  return (
    <div className="result-card" key={props.result.id} index={props.result.id}>
      {/* TODO: Make image a link that will pass props to singlemovie component */}
      <img
        className="poster-img"
        src={
          props.result.poster_path
            ? `${tmdbUrl}//${props.result.poster_path}`
            : `${viaPlaceholderUrl}/300x450.png?text=Photo+Not+Available`
          // placeholder from : C/O ${viaPlaceholderUrl}/#How_To_Set_Custom_Text"
        }
        alt={props.result.title}
      />
      <h1 className="search-results-header">{`${props.result.title}`}</h1>
      <p>{props.releaseYear(props.result.release_date)}</p>
    </div>
  );
};

export default ResultCard;
