import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import { reviewById } from '../../services/reviewURLs';
import { tmdbUrl, theMovieDbUrl } from '../../services/resourceURLs';
import DeleteModal from './DeleteModal';
import './deletemodal.css';
import './review.css';

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
    isEditing: false,
    isShowing: false
  };
  componentDidMount() {
    const movie_id = this.props.review.movieId;

    console.log('movieId', movie_id);
    const promise = axios.get(
      `${theMovieDbUrl}/3/movie/${movie_id}?api_key=${
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
  // activates delete modal
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  // deactivates delete modal
  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  // sets review id to this.id for use in deleting
  get id() {
    return this.props.review.id;
  }

  // allows us to delete and update state
  handleDelete = e => {
    e.preventDefault();
    console.log('RevId:', this.id);
    axios
      .delete(reviewById(this.id))
      .then(response => {
        console.log('response in delete rev: ', response);
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
    const { rating, textBody, created_at } = this.props.review;
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
      <div>
        <div className="card mb-2 mb-3 p-4 mb-5 bg-white">
          <DeleteModal
            show={this.state.isShowing}
            close={this.closeModalHandler}
            handleDelete={this.handleDelete}
          />
          <Row>
            <Col sm="4">
              <Link to={`/moviereviews/${this.props.review.movieId}`}>
                <img
                  className="card-img-top img-responsive"
                  src={`${tmdbUrl}${this.state.img}`}
                  alt="Card poster cap"
                />
              </Link>
              <div className="pt-0">
                <p className="card-text" />
                <h5 className="mt-3">{this.state.title}</h5>
                <div className="">
                  <div className="my-4">
                    <button
                      type="button"
                      className="btn mr-3 edit-delete-btns"
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
                            rating: this.props.review.rating,
                            movieId: this.props.review.movieId
                          }
                        }}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        Edit
                      </Link>
                    </button>
                    {this.state.isShowing ? (
                      <div
                        onClick={this.closeModalHandler}
                        className="back-drop"
                      />
                    ) : null}
                    <button
                      className="first-delete-btn edit-delete-btns"
                      onClick={this.openModalHandler}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="8">
              {/* <h4 className="pb-2">Review</h4> */}
              <div className="goFlex">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span className="smallStar">★</span>}
                  starCount={5}
                  value={rating}
                  className="mt-4"
                />
                <p className="space"> Date: {created_at}</p>
              </div>
              <p className="textbody">{textBody}</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Review;
