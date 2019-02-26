import React, { Component } from 'react';

import axios from 'axios';

class Review extends Component {
  state = {
    review: null,
    userId: null,
    movieId: null,
    twitterhandle: '',
    rating: null,
    textBody: '',
    isEditing: false
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

  // allows us to edit and update state
  handleEditReview = e => {
    e.preventDefault();

    const editedReview = {
      userId: this.state.userId,
      movieId: this.state.movieId,
      twitterhandle: this.state.twitterhandle,
      rating: this.state.rating,
      textBody: this.state.textBody
    };

    axios
      .put(`http://localhost:5000/api/reviews/${this.id}`, editedReview)
      .then(response => {
        this.props.fetchReviews();
        this.setState({
          review: response.data,
          userid: response.data.userId,
          movieId: response.data.movieId,
          twitterhandle: response.data.twitterhandle,
          rating: response.data.rating,
          textBody: response.data.textBody,
          isEditing: false
        });
      })
      .catch(error => {
        console.error(error);
      });
    window.location.reload();
  };

  // allows us to edit the current review
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  render() {
    // if edit mode is toggled, it returns the edit form
    if (this.state.isEditing) {
      return (
        <ReviewForm
          userId={this.state.userId}
          movieId={this.state.movieId}
          twitterhandle={this.state.twitterhandle}
          rating={this.state.rating}
          textBody={this.state.textBody}
          handleEditReview={this.handleEditReview}
          handleInputChange={this.handleEditInputChange}
        />
      );
    }
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
