import React, { Component } from 'react';
// import './App.css';
// import './components/NotesList.css';
// import './components/NoteForm.css';
// import './components/Note.css';

import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import ReviewsList from './MyReviewsList';
import ReviewForm from './ReviewForm';
import SingleReview from './SingleReview';

class MyReviews extends Component {
  state = {
    reviews: [],
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
        // console.log(response.data);
        this.setState({
          reviews: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // // console.log("PROCESS: ", process.env);
    // if (this.isAuthenticated()) {
    return (
      <div className="My-Reviews">
        <header className="sidebar">
          <h1 className="App-title">My Reviews</h1>
        </header>
        <div className="reviews-section">
          <ReviewsList ReviewsList={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default MyReviews;
