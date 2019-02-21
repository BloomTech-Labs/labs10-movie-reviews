import React from 'react';
import { Link } from 'react-router-dom';
import './mappedItem.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';


const MappedItem = (props) => {
  return (
    <div className="singleMovie">
      <Card>
        <Link to={`movie/get/${props.item.id}`} className="linksMovie">
          <CardImg
            //   width="30%"
            src={`http://image.tmdb.org/t/p/w185//${
              props.item.backdrop_path
            }`}
            alt="image"
          />
          <CardTitle>
            <h5 className="headings noteTitle">{props.item.title}</h5>
          </CardTitle>
          <hr />
          {/* <p className="noteBody">{props.item.title}</p> */}
        </Link>
      </Card>
    </div>
  );
};

export default MappedItem;
