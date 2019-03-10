import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';
import { tmdbUrl } from '../../services/resourceURLs';

const MappedItem = props => {
  return (
    <Col lg={3} md={4}>
      <Link
        to={`moviereviews/${props.item.id}`}
        className="linksMovie"
        style={{ textDecoration: 'none' }}
      >
        <img
          src={`${tmdbUrl}/${props.item.backdrop_path}`}
          className="card-img"
          alt="movie image"
        />
        <p className="movie-title">
          <span className="title-text rounded small">{props.item.title}</span>
        </p>
      </Link>
    </Col>
  );
};

export default MappedItem;
