import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

import ReviewsList from './MyReviewsList';

class MyReviews extends Component {
  state = {
    reviews: [],
    userId: null,
    movieId: null,
    twitterhandle: '',
    rating: null,
    textBody: ''
  };

  componentDidMount() {
    this.fetchReviews();
  }

  // allows us to get all the reviews data from the API
  fetchReviews = () => {
    axios
      .get('http://localhost:5000/api/reviews')
      .then(response => {
        this.setState({
          reviews: response.data
        });
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
            <h4>User Info</h4>
            <div className="placeholder">
              <a href="https://placeholder.com">
                <img src="https://via.placeholder.com/150" />
              </a>
            </div>
            <p />
            <Button>user info</Button>
            <p />
            <Button>
              {/* <Link to={`/reviewform`}>Write Review</Link> */}
            </Button>
            <p>Status: </p>
            <p>Name: </p>
            <p>Number of Reviews: </p>
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
