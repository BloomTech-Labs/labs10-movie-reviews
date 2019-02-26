import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import { Card, CardImg, CardTitle, Col } from 'reactstrap';

const MappedItem = props => {
  return (
    <Col md={3} sm={4} px-0>
      <div className="singleMovie">
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
      </div>
    </Col>
  );
};

export default MappedItem;
