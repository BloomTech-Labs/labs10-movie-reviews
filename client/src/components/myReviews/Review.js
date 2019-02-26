import React, { Component } from 'react';

import axios from 'axios';

class Review extends Component {
  state = {
    review: null,
    userId: null,
    movieId: null,
    twitterhandle: '',
    rating: null,
    textBody: ''
  };

  // sets review id to this.id for use in deleting
  get id() {
    return this.props.review.id;
  }

  // allows us to delete and update state
  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/reviews/${this.id}`)
      .then(response => {
        this.props.fetchReviews();
        this.setState({
          review: response.data,
          userid: response.data.userId,
          movieId: response.data.movieId,
          twitterhandle: response.data.twitterhandle,
          rating: response.data.rating,
          textBody: response.data.textBody
        });
      })
      .catch(error => {
        console.error(error);
      });
    window.location.reload();
  };

  // changes rating and textBody on state when an edit happens
  handleEditInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <p>rating: {rating}</p>
        <p>textbody: {textBody}</p>
        <button className="delete-edit-btn" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default Review;
