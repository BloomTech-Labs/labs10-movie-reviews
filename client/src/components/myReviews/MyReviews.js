import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { currentUser } from '../../services/userURLs';
import { reviews } from '../../services/reviewURLs';
import { placeholderUrl } from '../../services/resourceURLs';

import ReviewsList from './MyReviewsList';
import './MyReviews.css';

class MyReviews extends Component {
  state = {
    reviews: [],
    userId: null,
    movieId: null,
    reviewer: '',
    photo: '',
    email: '',
    rating: null,
    textBody: '',
    name: '',
    premium: ''
  };

  componentDidMount = async () => {
    this.fetchReviews();
    const userRes = await axios.get(currentUser, {
      withCredentials: true
    });
    if (userRes.data) {
      let newPhoto;
      if (userRes.data.twitterId) {
        //this code takes the photo URL from twitter - which is low resolution and takes a substring of it and concats it with the jpg to give us a higher resolution photo for myReviews dashboard.
        newPhoto =
          userRes.data.photo.substr(0, userRes.data.photo.length - 11) + '.jpg';
      } else {
        newPhoto = userRes.data.photo;
      }
      this.setState({
        photo: newPhoto,
        name: userRes.data.name,
        email: userRes.data.email
      });
      console.log('userData', userRes.data);
    } else {
      console.log('Unable to get current user information');
    }
  };

  // allows us to get all the reviews data from the API
  fetchReviews = () => {
    axios
      .get(reviews)
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="movieRevWrapper">
        {/* start of Grid A */}
        <Row>
          <Col md="3">
            <div className="placeholder">
              <a href={`${placeholderUrl}`}>
                <img
                  className="myreviews-avatar img-responsive mb-3 "
                  src={this.state.photo}
                  alt="avatar"
                  style={{ height: 150, width: 150 }}
                />
              </a>

              <ul className="list-group list-group-flush text-left">
                {/* <li className="list-group-item pl-3 bg-white border-info"><span className="small badge badge-light mr-2">Status: </span>
                    <span>
                      {this.state.premium 
                        ? <h3 className="badge badge-info">Premium</h3>
                        : <h3 className="badge badge-info">Standard</h3>
                      }
                    </span>
                  </li> */}

                <li className="list-group-item pl-3 bg-white">
                  <span className="small badge badge-light mr-1">Name: </span>
                  <span className="badge badge-light">{this.state.name}</span>
                </li>

                <li className="list-group-item pl-3 bg-white">
                  <span className="small badge badge-light mr-1"> Email: </span>
                  <span className="badge badge-light">{this.state.email}</span>
                </li>

                <li className="list-group-item pl-3 bg-white">
                  <span className="small badge badge-light mr-1">
                    {' '}
                    Number of Reviews:
                  </span>
                  <span className="badge badge-light">TBD</span>
                </li>
              </ul>
            </div>
          </Col>
          {/* 12 grid B */}
          <Col md="9" className="secondCol">
            <div className="bodyRev">
              <div className="My-Reviews">
                <header className="sidebar" />
                <div className="reviews-section text-left">
                  <ReviewsList reviewslist={this.state.reviews} />
                </div>
              </div>
            </div>

            {/* end of Grid B */}
          </Col>
        </Row>
        {/* end of 12 Grid A */}
      </Container>
    );
  }
}

export default MyReviews;
