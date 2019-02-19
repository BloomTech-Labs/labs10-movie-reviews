import React, { Component } from 'react';
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

class MappedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL:
        'https://api.themoviedb.org/3/movie/4/images?api_key=bac233852df0417513d6efb2d05de4c0&language=en-US'
    };
  }
  render() {
    // console.log('this props in a mapped movie: ', this.props);
    return (
      <div className="singleMovie">
        <Card>
          <Link to={`movie/get/${this.props.item.id}`} className="linksMovie">
            <CardImg
              //   width="30%"
              src={`http://image.tmdb.org/t/p/w185//${
                this.props.item.backdrop_path
              }`}
              alt="image"
            />
            <CardTitle>
              <h5 className="headings noteTitle">{this.props.item.title}</h5>
            </CardTitle>
            <hr />
            {/* <p className="noteBody">{this.props.item.title}</p> */}
          </Link>
        </Card>
      </div>
    );
  }
}

export default MappedItem;
