import React, { Component } from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import './stars.css';
import { currentUser } from '../../services/userURLs';
import { reviews, reviewById } from '../../services/reviewURLs';
import { Container, Row, Col, Form, Input } from 'reactstrap';
// import { truncate } from 'fs';

class ReviewForm extends Component {
  state = {
    id: 0,
    googleId: 0,
    movieId: 0,
    reviewer: '',
    rating: 3,
    textBody: '',
    email: '',
    emptyBody: false,
    errorM: '',
    review: 0
  };

  componentDidMount = async () => {
    // console.log('this token', this.props.location.state);
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      // console.log('RevForm res.data: ', res.data);
      this.setState({
        textBody: this.props.location.state.textBody,
        rating: this.props.location.state.rating
          ? this.props.location.state.rating
          : 3,
        googleId: res.data.googleId,
        reviewer: res.data.email,
        id: res.data.id,
        movieId: this.props.location.state.movieId,
        img: this.props.location.state.img
      });
    }
    // console.log('RevForm state in reviewForm: ', this.state);
  };

  onStarClick(nextValue, prevValue = 3, name) {
    this.setState({ rating: nextValue }, () => {
      this.setState({ rating: this.state.rating });
      // console.log('stars num: ', this.state.rating);
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ rating: [...this.state.rating, nextProps.addToList] }); // notice the difference this.props vs nextProps
  }

  // allows us to add name, rating and textBody info for new review created on state
  // sets review id to this.id for use in deleting
  get id() {
    return this.props.match.params.id;
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // allows us to edit and update state
  handleEditReview = e => {
    e.preventDefault();

    const editedReview = {
      userId: this.state.id,
      movieId: this.state.movieId,
      reviewer: this.state.reviewer,
      rating: this.state.rating,
      textBody: this.state.textBody
    };
    this.state.textBody
      ? axios
          .put(reviewById(this.id), editedReview)
          .then(response => {
            // this.props.fetchReviews();
            this.props.history.push('/myreviews');
          })
          .catch(error => {
            console.error(error);
          })
      : this.setState({ emptyBody: true });
    // window.location.reload();
    // this.props.history.push('/myreviews');
  };

  // allows us to create a new review and post it to the API
  handleWriteNewReview = event => {
    event.preventDefault();

    const review = {
      userId: this.state.id,
      movieId: this.id,
      reviewer: this.state.reviewer,
      rating: this.state.rating,
      textBody: this.state.textBody
    };
    // console.log('RevForm review: ', review);
    this.state.textBody
      ? axios
          .post(reviews, review)
          .then(response => {
            // console.log('RevForm response: ', response);
            this.props.history.push({
              pathname: '/myreviews',
              state: { detail: response.data }
            });
          })
          .then(response => {
            this.props.history.push('/myreviews');
          })
          .catch(err => {
            console.log(err);
          })
      : this.setState({ emptyBody: true });
    // console.log('empty field state: ', this.state.emptyBody);
  };

  render() {
    // console.log('checking empty body state: ', this.state.emptyBody);
    const genres = this.props.location.state.genres + ' ';
    const newGenres = genres.split(',').join(`, `);
    const countries = this.props.location.state.countries + ' ';
    const newCountries = countries.split(',').join(`, `);
    // console.log('all props in Review form: ', this.props.location.state);

    return (
      <Container className="movieRevWrapper">
        <Row>
          <Col lg="5" className="mb-3">
            <div className="card">
              <div className="card-body text-left colRight">
                {/* <div className="card" style={{ width: '18rem' }}> */}
                <img
                  className="card-img-top"
                  src={`${this.props.location.state.img}`}
                  alt="Poster of the movie"
                />
                {/* <div className="card-body"> */}
                <br />
                <br />
                <h5 className="card-title text-left movieTitle">
                  {this.props.location.state.title}
                </h5>
                <div className="card-text mb-1" id="movieInfoWrapper">
                  <p>
                    <span className="bold">Genres:</span>{' '}
                    <span className="movieInfo">{newGenres}</span>
                  </p>
                  <p>
                    <span className="bold">Release Date: </span>
                    <span className="movieInfo">
                      {this.props.location.state.year}
                    </span>
                  </p>
                  <p>
                    <span className="bold">Countries: </span>
                    <span className="movieInfo">{newCountries}</span>
                  </p>
                </div>
                <p className="card-text text-left" id="noMarginL">
                  {this.props.location.state.overview}
                </p>
              </div>
              {/* </div> */}
            </div>
          </Col>
          <Col lg="7">
            {/* <div className="card"> */}
            <div className="card card-body text-left">
              <Form>
                <div className="form-div starS">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    // onStarHover={this.onStarClick.bind(this)}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <br />
                {/* <Label for="exampleText">Write Review:</Label> */}
                <Input
                  type="textarea"
                  placeholder="Write Review"
                  //   name="text"
                  id="exampleText"
                  rows={8}
                  value={this.state.textBody}
                  name="textBody"
                  onChange={this.handleInputChange}
                />
                <br />
                <p />
                {this.props.location.state.edit ? (
                  <div className="text-right">
                    <span className="errorM">
                      {this.state.emptyBody ? 'Please add a review' : null}
                    </span>
                    <button
                      className="material-button-raised btn btn-outline-info"
                      onClick={this.handleEditReview}
                    >
                      Update Review
                    </button>
                  </div>
                ) : (
                  <div className="text-right">
                    <span className="errorM">
                      {this.state.emptyBody ? 'Please add a review' : null}
                    </span>
                    <button
                      onClick={this.handleWriteNewReview}
                      className="btn btn-outline-info"
                      id="submit"
                    >
                      Submit Review
                    </button>
                  </div>
                )}
              </Form>
              <p />
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReviewForm;
