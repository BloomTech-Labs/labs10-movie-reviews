import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { currentUser } from '../../services/currentUserURLs';
import { currentReviews } from '../../services/currentUserURLs';

import ReviewsList from './MyReviewsList';
import './MyReviews.css';

class MyReviews extends Component {
  state = {
    reviews: [],
    userId: null,
    movieId: null,
    name: '',
    photo: '',
    email: '',
    rating: null,
    textBody: ''
  };

  componentDidMount = async () => {
    this.fetchReviews();
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      this.setState({
        name: res.data.name,
        photo: res.data.photo,
        email: res.data.email
      });
    }
  };

  // allows us to get all the reviews data from the API
  fetchReviews = () => {
    axios
      .get(currentReviews)
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
          <Col sm="4">
            <div className="placeholder">
              <a href="https://placeholder.com">
                <img
                  className="myreviews-avatar"
                  src={this.state.photo}
                  alt="avatar"
                />
              </a>
            </div>
            <p />
            <Button>Update User</Button>
            <p />
            <Button>
              {/* <Link to={`/reviewform`}>Write Review</Link> */}
            </Button>
            <p>Status: </p>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Number of Reviews:</p>
          </Col>
          {/* 12 grid B */}
          <Col sm="8" className="secondCol">
            <div className="bodyRev">
              <div className="My-Reviews">
                <header className="sidebar" />
                <div className="reviews-section">
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
