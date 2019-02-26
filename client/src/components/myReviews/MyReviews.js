import React, { Component } from 'react';

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

  // allows us to add twitterhandle, rating and textBody info for new review created on state
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
      <div className="My-Reviews">
        <header className="sidebar">
          <h1 className="App-title">My Reviews</h1>
        </header>
        <div className="reviews-section">
          <ReviewsList reviewslist={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default MyReviews;
