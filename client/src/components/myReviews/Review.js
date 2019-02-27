import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import axios from 'axios';

import ReviewForm from './ReviewForm';

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

  // allows us to edit the current review
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  render() {
    const { rating, textBody, id } = this.props.review;
    console.log('all props in review page: ', this.props);

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
          id={this.id}
        />
      );
    }

    return (
      <Row>
        <Col sm="4">
          <div className="placeholder">
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/100" />
            </a>
          </div>
          <p>
            Movie Name
            <br />
            {/* Location: <br /> */}
          </p>
          <button className="delete-edit-btn" onClick={this.toggleEdit}>
            {' '}
            <Link
              to={{
                pathname: `/reviewform/${this.id}`,
                state: {
                  id: this.id
                  // title: this.state.title,
                  // year: this.state.year,
                  // overview: this.state.overview,
                  // img: this.state.img
                }
              }}
            >
              Edit
            </Link>
          </button>
          <button className="delete-edit-btn" onClick={this.handleDelete}>
            Delete
          </button>
          <br />
        </Col>
        <Col sm="8">
          {/* <div className="ratingStar">
                  <p>
                    Rating Stars: <span>Date: </span>
                  </p>
                </div> */}

          <p>rating: {rating}</p>
          <p>textbody: {textBody}</p>
        </Col>
        <br />
      </Row>
    );
  }
}

export default Review;
