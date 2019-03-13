import React from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { currentUser } from '../../services/userURLs';
import { placeholderUrl } from '../../services/resourceURLs';
import './UserReview.css';
import StarRatingComponent from 'react-star-rating-component';

export default class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: '',
      photo: '',
      name: ''
    };
  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      console.log('res data in UserReview.js: ', res.data);
      this.setState({
        reviewer: res.data.reviewer,
        photo: res.data.photo,
        name: res.data.name
      });
    }
  };

  render() {
    console.log('props in reviews: ', this.props);
    return (
      <div className="container card mb-2 mb-3 pt-2 bg-white">
        <Row>
          <Col lg="4" sm="12">
            <div className="pt-0">
              <div className="col">
                <div className="placeholder">
                  <Link to={`/myreviews`}>
                    <img
                      className="movie-profile-avatar"
                      src={this.state.photo}
                      alt="placeholder"
                    />
                  </Link>

                  <ul className="list-group list-group-flush text-left">
                    <li className=" bg-white">
                      <br />
                      {/* <span className="small badge badge-light">Status: </span>
                      <span> */}
                      {/* {this.state.premium ? ( */}
                      {/* <h3 className="badge badge-info">Premium</h3>
                    ) : ( */}
                      {/* <h3 className="badge badge-light">Standard</h3> */}
                      {/* )} */}
                      {/* </span> */}
                    </li>

                    <li className="bg-white">
                      <span className="small badge badge-light mr-1">
                        Name:{' '}
                      </span>
                      <span className="badge badge-light">
                        {this.state.name}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8" sm="12">
            <br />
            <div className="goFlex">
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span className="smallStar">★</span>}
                starCount={5}
                value={this.props.item.rating}
              />
              <p className="space"> Date: {this.props.item.created_at}</p>
              <br />
              <br />
            </div>
            <p className="card-text">{this.props.item.textBody}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
