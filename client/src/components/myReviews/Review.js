import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, CardImg } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import { editDeleteReviews } from '../../services/currentUserURLs';

import ReviewForm from './ReviewForm';

class Review extends Component {
  state = {
    review: null,
    id: null,
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

    console.log('movieId', movie_id);
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
    console.log('RevId:', this.id);
    axios
      .delete(editDeleteReviews(this.id))
      .then(response => {
        // this.props.fetchReviews();
        this.props.history.push('/myreviews');
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
      <div className="card mb-2 box-shadow mb-3 shadow p-2 mb-5 bg-white">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleDelete}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <Row>
          <Col sm="4">
            <Link to={`/moviereviews/${this.props.review.movieId}`}>
              <img
                className="card-img-top img-responsive img-thumbnail"
                src={`http://image.tmdb.org/t/p/original${this.state.img}`}
                style={{ height: 170, width: '100%' }}
                alt="Card image cap"
              />
            </Link>
            <div className="card-body pt-0">
              <p className="card-text" />
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={rating}
              />
              <p className="mt-0">{this.state.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={this.toggleEdit}
                  >
                    {' '}
                    <Link
                      to={{
                        pathname: `/reviewform/${this.id}`,
                        state: {
                          id: this.id,
                          title: this.state.title,
                          year: this.state.year,
                          overview: this.state.overview,
                          img: this.state.img,
                          edit: true,
                          textBody: this.props.review.textBody,
                          rating: this.props.review.rating
                        }
                      }}
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="8">
            <h4 className="pb-2">Review</h4>
            <p>{textBody}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Review;
