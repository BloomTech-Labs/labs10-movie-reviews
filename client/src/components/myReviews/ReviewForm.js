import React, { Component } from 'react';
import axios from 'axios';
import { tmdbUrl } from '../../services/resourceURLs';
import StarRatingComponent from 'react-star-rating-component';
import './stars.css';
import { currentUser } from '../../services/userURLs';
import { reviews, reviewById } from '../../services/reviewURLs';
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';

class ReviewForm extends Component {
  state = {
    id: 0,
    googleId: 0,
    movieId: 0,
    reviewer: '',
    rating: 3,
    textBody: '',
    email: '',
    review: 0
  };

  componentDidMount = async () => {
    console.log('this token', this.props.location.state);
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      console.log('RevForm res.data: ', res.data);
      this.setState({
        textBody: this.props.location.state.textBody,
        rating: this.state.rating ? 3 : this.props.location.state.rating,
        googleId: res.data.googleId,
        reviewer: res.data.email,
        id: res.data.id,
        movieId: this.props.location.state.movieId,
        img: this.props.location.state.img
      });
    }
    console.log('RevForm state in reviewForm: ', this.state);
  };

  onStarClick(nextValue, prevValue = 3, name) {
    this.setState({ rating: nextValue }, () => {
      this.setState({ rating: this.state.rating });
      console.log('stars num: ', this.state.rating);
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

    axios
      .put(reviewById(this.id), editedReview)
      .then(response => {
        // this.props.fetchReviews();
        this.props.history.push('/myreviews');
      })
      .catch(error => {
        console.error(error);
      });
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
    console.log('RevForm review: ', review);

    axios
      .post(reviews, review)
      .then(response => {
        console.log('RevForm response: ', response);
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
      });
  };

  render() {
    return (
      <Container className="movieRevWrapper">
        <Row>
          <Col sm="5">
            <div className="card-body text-left colRight">
              <div className="card">
                {/* <div className="card" style={{ width: '18rem' }}> */}
                <img
                  className="card-img-top"
                  src={`${tmdbUrl}//${this.props.location.state.img}`}
                  alt="Poster of the movie"
                />
                <div className="card-body">
                  <h5 className="card-title text-left">
                    {this.props.location.state.title}
                  </h5>
                  {/* <p />
                  <p /> */}
                  <p className="card-text">
                    {this.props.location.state.overview}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="7">
            <div className="card-body text-left">
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

                <Label for="exampleText">Write Review:</Label>
                <Input
                  type="textarea"
                  placeholder="Review Content"
                  //   name="text"
                  id="exampleText"
                  rows={8}
                  value={this.state.textBody}
                  name="textBody"
                  onChange={this.handleInputChange}
                />
                <p />
                {this.props.location.state.edit ? (
                  <button
                    className="material-button-raised btn btn-outline-info"
                    onClick={this.handleEditReview}
                  >
                    Update Review
                  </button>
                ) : (
                  <button
                    onClick={this.handleWriteNewReview}
                    className="btn btn-outline-info"
                    id="submit"
                  >
                    Submit Review
                  </button>
                )}
              </Form>
              <p />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReviewForm;
