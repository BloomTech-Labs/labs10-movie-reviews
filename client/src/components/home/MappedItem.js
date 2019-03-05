import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Col } from 'reactstrap';

const MappedItem = props => {
  return (
    <Col md={3} sm={3}>
      {/* <div className="singleMovie">
        <Card>
          <Link to={`moviereviews/${props.item.id}`} className="linksMovie">
            <CardImg
              src={`http://image.tmdb.org/t/p/original//${
                props.item.backdrop_path
              }`}
              alt="image"
            />
            <CardTitle>{props.item.title}</CardTitle>
            <hr />
          </Link>
        </Card>
      </div> */}
      <Link to={`moviereviews/${props.item.id}`} className="linksMovie" style={{ textDecoration: 'none' }}>
        <img 
          src={`http://image.tmdb.org/t/p/original//${props.item.backdrop_path}`} className="card-img img-responsive" alt="movie image" />
          <p className="title">{props.item.title}</p>
      </Link>
    </Col>
  );
};

export default MappedItem;
