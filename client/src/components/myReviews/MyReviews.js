import React, { Component } from 'react';

import axios from 'axios';

import ReviewsList from './MyReviewsList';
import WriteReview from './WriteReview';

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

  // allows us to create a new review and post it to the API
  handleWriteNewReview = event => {
    const review = {
      userId: this.state.userId,
      movieId: this.state.movieId,
      twitterhandle: this.state.twitterhandle,
      rating: this.state.rating,
      textBody: this.state.textBody
    };

    axios
      .post('http://localhost:5000/api/reviews', review)
      .then(response => {
        this.setState({
          userid: response.data.userId,
          movieId: response.data.movieId,
          twitterhandle: response.data.twitterhandle,
          rating: response.data.rating,
          textBody: response.data.textBody
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          <WriteReview
            userId={this.state.userId}
            movieId={this.state.movieId}
            twitterhandle={this.state.twitterhandle}
            rating={this.state.rating}
            textBody={this.state.textBody}
            handleWriteNewReview={this.handleWriteNewReview}
            handleInputChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default MyReviews;
