import React from 'react';

const ResultCard = props => {
  return (
    <div className="result-card" key={props.result.id} index={props.result.id}>
      {/* TODO: Make image a link that will pass props to singlemovie component */}
      <img
        className="poster-img"
        src={
          props.result.poster_path
            ? `https://image.tmdb.org/t/p/original${props.result.poster_path}`
            : 'https://via.placeholder.com/300x450.png?text=Photo+Not+Available'
          // placeholder from : C/O https://placeholder.com/#How_To_Set_Custom_Text"
        }
        alt={props.result.title}
      />
      <h1 className="search-results-header">
        {`${props.result.title}`}
      </h1>
      <p>{props.releaseYear(
          props.result.release_date)}
      </p>
    </div>
  );
};

export default ResultCard;
