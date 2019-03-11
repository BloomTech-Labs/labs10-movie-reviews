import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';
import { tmdbUrl } from '../../services/resourceURLs';

const MappedItem = props => {
  return (
    <Col lg={3} md={4}>
      {/* <div className="singleMovie">
        <Card>
          <Link to={`moviereviews/${props.item.id}`} className="linksMovie">
            <CardImg
              src={`${tmdbUrl}//${
                props.item.backdrop_path
              }`}
              alt="image"
            />
            <CardTitle>{props.item.title}</CardTitle>
            <hr />
          </Link>
        </Card>
      </div> */}
      <Link
        to={`moviereviews/${props.item.id}`}
        className="linksMovie"
        style={{ textDecoration: 'none' }}
      >
        <img
          src={`${tmdbUrl}/${props.item.backdrop_path}`}
          className="card-img"
          alt="movie poster"
        />
        <p className="movie-title">
          <span className="title-text rounded small">{props.item.title}</span>
        </p>
      </Link>
    </Col>
  );
};

export default MappedItem;
