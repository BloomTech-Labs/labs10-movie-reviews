import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';
import { tmdbUrl } from '../../services/resourceURLs';

const MappedItem = props => {
  return (
    <Col lg={3} md={4} sm={6} xs={12}>
      <Link
        to={`moviereviews/${props.item.id}`}
        className="linksMovie"
        style={{ textDecoration: 'none' }}
      >
        <img
          src={`${tmdbUrl}${props.item.backdrop_path}`}
          className="card-img img-responsive popular-img"
          alt="movie poster"
        />
        <h6 className="movie-title">
          <span className="title-text rounded">{props.item.title}</span>
        </h6>
      </Link>
    </Col>
  );
};

export default MappedItem;
