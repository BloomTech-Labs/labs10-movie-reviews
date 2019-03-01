import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, CardImg } from 'reactstrap';

import axios from 'axios';
import { editDeleteReviews } from '../../services/currentUserURLs';

import ReviewForm from './ReviewForm';

class Review extends Component {
  state = {
    review: null,
    googleId: null,
    movieId: null,
    reviewer: '',
    rating: null,
    textBody: '',
    title: '',
    overview: '',
    img: '',
    isEditing: false
  };
  componentDidMount() {
    const movie_id = this.props.review.movieId;
    const promise = axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
        process.env.REACT_APP_API
      }&language=en-US`
    );
    promise
      .then(response => {
        // console.log('response in movie rev: ', response);
        this.setState({
          title: response.data.title,
          // year: response.data.release_date,
          overview: response.data.overview,
          img: response.data.backdrop_path,
          id: response.data.id
          //   loading: false
        });
        // console.log('movies id: ', this.state.id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // sets review id to this.id for use in deleting
  get id() {
    return this.props.review.id;
  }

  // allows us to delete and update state
  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(editDeleteReviews(this.id))
      .then(response => {
        this.props.fetchReviews();
        this.setState({
          review: response.data,
          googleId: response.data.googleId,
          movieId: response.data.movieId,
          reviewer: response.data.reviewer,
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
    const { rating, textBody } = this.props.review;
    console.log('all props in review page: ', this.props);

    // if edit mode is toggled, it returns the edit form
    if (this.state.isEditing) {
      return (
        <ReviewForm
          googleId={this.state.googleId}
          movieId={this.state.movieId}
          reviewer={this.state.reviewer}
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
              <CardImg
                src={`http://image.tmdb.org/t/p/original${this.state.img}`}
                alt="image"
              />
            </a>
          </div>
          <p>{this.state.title}</p>
          <button className="delete-edit-btn" onClick={this.toggleEdit}>
            {' '}
            <Link
              to={{
                pathname: `/reviewform/${this.id}`,
                state: {
                  id: this.id,
                  // title: this.state.title,
                  // year: this.state.year,
                  // overview: this.state.overview,
                  img: this.state.img
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
