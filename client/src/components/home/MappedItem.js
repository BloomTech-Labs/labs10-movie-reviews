import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';
import { tmdbUrl } from '../../services/resourceURLs';

const MappedItem = props => {
  return (
    <Col lg={3} md={4}>
<<<<<<< HEAD
      <Link to={`moviereviews/${props.item.id}`} className="linksMovie" style={{ textDecoration: 'none' }}>
        <div>
          <img 
            src={`http://image.tmdb.org/t/p/original//${props.item.backdrop_path}`} className="card-img img-responsive" alt="movie image" />
          <p className="movie-title container"><span className="title-text rounded">{props.item.title}</span></p>
        </div>
=======
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
          alt="movie image"
        />
        <p className="movie-title">
          <span className="title-text rounded small">{props.item.title}</span>
        </p>
>>>>>>> 50845d202444e19c8532532ab1cec68a23369360
      </Link>
    </Col>
  );
};

export default MappedItem;
