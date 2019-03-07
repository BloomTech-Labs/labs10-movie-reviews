import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';

const MappedItem = props => {
  return (
    <Col lg={3} md={4}>
      <Link to={`moviereviews/${props.item.id}`} className="linksMovie" style={{ textDecoration: 'none' }}>
        <div>
          <img 
            src={`http://image.tmdb.org/t/p/original//${props.item.backdrop_path}`} className="card-img img-responsive" alt="movie image" />
          <p className="movie-title container"><span className="title-text rounded">{props.item.title}</span></p>
        </div>
      </Link>
    </Col>
  );
};

export default MappedItem;
