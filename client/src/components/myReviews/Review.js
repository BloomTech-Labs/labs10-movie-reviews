import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import { reviewById } from '../../services/reviewURLs';
import { tmdbUrl, theMovieDbUrl } from '../../services/resourceURLs';
import DeleteModal from './DeleteModal';
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
    isShowing: false,
    releaseDate: '',
    countries: '',
    genres: ''
  };
  componentDidMount() {
    const movie_id = this.props.review.movieId;

    // console.log('movieId', movie_id);
    const promise = axios.get(
      `${theMovieDbUrl}/3/movie/${movie_id}?api_key=${
        process.env.REACT_APP_API
      }&language=en-US`
    );
    promise
      .then(response => {
        // console.log('response in movie rev: ', response);
        const genres = [];
        response.data.genres
          ? response.data.genres.filter(word => genres.push(word.name))
          : console.log('got 0 genres');
        const countries = [];
        response.data.production_countries
          ? response.data.production_countries.filter(item =>
              countries.push(item.name)
            )
          : console.log('got 0 countries');
        this.setState({
          title: response.data.title,
          // year: response.data.release_date,
          overview: response.data.overview,
          img: response.data.backdrop_path,
          id: response.data.id,
          releaseDate: response.data.release_date,
          countries: countries,
          genres: genres
        });
        // console.log(
        //   'movie info: ',
        //   this.state.releaseDate,
        //   this.state.countries,
        //   this.state.genres
        // );
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
    // console.log('RevId:', this.id);
    axios
      .delete(reviewById(this.id))
      .then(response => {
        // console.log('response in delete rev: ', response);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
    // window.location.reload();
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

  getReviewDate = string => {
    let regex = /(18|19|20)\d{2}-(0|1)\d{1}-(0|1|2|3)\d{1}/g;

    let found = string.match(regex);
    // console.log(found);
    if (!found) {
      return '';
    } else {
      let split = found[0].split('');
      // console.log(split);
      let year = split.splice(0, 4).join('');
      let month = split.splice(1, 2).join('');
      let day = split.splice(2).join('');
      // console.log(year, month, day);

      return month + '-' + day + '-' + year;
    }
  };

  render() {
    const { rating, textBody, created_at } = this.props.review;
    // console.log('all props in review page: ', this.props);

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
            className="modal"
            overlayClassName="overlay"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            handleDelete={this.handleDelete}
          />
          <Row>
            <Col md="4">
              <Link to={`/moviereviews/${this.props.review.movieId}`}>
                <img
                  className="card-img-top img-responsive"
                  src={`${tmdbUrl}${this.state.img}`}
                  alt="Card poster cap"
                />
              </Link>
              <div className="pt-0">
                <p className="card-text" />
                <h5 className="mt-3">{`${
                  this.state.title
                } ${this.props.getReleaseYear(this.state.releaseDate)}`}</h5>
                <div className="">
                  <div className="my-4" id="parentFlex">
                    <div onClick={this.toggleEdit} className="edit-delete-btns">
                      <Link
                        to={{
                          pathname: `/reviewform/${this.id}`,
                          state: {
                            id: this.id,
                            title: this.state.title,
                            year: this.state.year,
                            overview: this.state.overview,
                            img: `${tmdbUrl}${this.state.img}`,
                            edit: true,
                            textBody: this.props.review.textBody,
                            rating: this.props.review.rating,
                            movieId: this.props.review.movieId,
                            genres: this.state.genres,
                            releaseDate: this.state.releaseDate,
                            countries: this.state.countries
                          }
                        }}
                      >
                        Edit
                      </Link>
                    </button>
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
            <Col md="8">
              <div className="goFlex">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span className="smallStar">★</span>}
                  starCount={5}
                  value={rating}
                />
                <p className="space"> Date: {this.getReviewDate(created_at)}</p>
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
