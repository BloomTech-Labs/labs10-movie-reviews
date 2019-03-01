import React, { Component } from 'react';
import axios from 'axios';
import { currentUser } from '../../services/currentUserURLs';
import { currentReviews } from '../../services/currentUserURLs';
import { editDeleteReviews } from '../../services/currentUserURLs';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Media,
  CardImg
} from 'reactstrap';

class ReviewForm extends Component {
  state = {
    googleId: 0,
    movieId: 0,
    reviewer: '',
    rating: 0,
    textBody: '',
    email: '',
    review: 0
  };

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      console.log('RevForm res.data: ', res.data);
      this.setState({
        name: res.data.email,
        // photo: res.data.photo,
        googleId: res.data.googleId,
        reviewer: res.data.email
      });
    }
    // console.log('RevForm state in reviewForm: ', this.state);
  };

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
      userId: this.state.googleId,
      movieId: this.state.movieId,
      reviewer: this.state.reviewer,
      rating: this.state.rating,
      textBody: this.state.textBody
    };

    axios
      .put(editDeleteReviews(this.id), editedReview)
      .then(response => {
        this.props.fetchReviews();
        this.setState({
          review: response.data,
          googleId: response.data.googleId,
          movieId: response.data.movieId,
          reviewer: response.data.reviewer,
          rating: response.data.rating,
          textBody: response.data.textBody,
          isEditing: false
        });
      })
      .catch(error => {
        console.error(error);
      });
    window.location.reload();
    this.props.history.push('/myreviews');
  };

  // allows us to create a new review and post it to the API
  handleWriteNewReview = event => {
    event.preventDefault();
    const review = {
      userId: this.state.googleId,
      movieId: this.id,
      reviewer: this.state.name,
      rating: this.state.rating,
      textBody: this.state.textBody
    };
    // console.log('RevForm review: ', review);

    axios
      .post(currentReviews, review)
      .then(response => {
        this.setState({
          userId: response.data.googleId,
          movieId: response.data.movieId,
          reviewer: response.data.reviewer,
          rating: response.data.rating,
          textBody: response.data.textBody
        });
        console.log('RevForm response: ', response);
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
    this.props.history.push('/myreviews');
  };

  render() {
    // console.log('RevForm: id in render: ', this.props.match.params.id);
    // console.log('RevForm: props in review form: ', this.props.location.state);
    // console.log('RevForm: all props in review form: ', this.props);

    return (
      <Container>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <Media>
              <Media body>
                <Media heading>{this.props.location.state.title}</Media>
                {this.props.location.state.overview}
              </Media>
            </Media>
          </Col>
          <Col>
            <CardImg
              src={`http://image.tmdb.org/t/p/original//${
                this.props.location.state.img
              }`}
              alt="image"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Form>
              <div className="form-div">
                <div className="form-div">
                  <p>Rating:</p>
                  <input
                    name="rating"
                    placeholder="1-5"
                    value={this.state.rating}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <Label for="exampleText">Text Body:</Label>
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

              <Button onClick={this.handleWriteNewReview}>Submit Review</Button>
              <button
                className="material-button-raised"
                onClick={this.handleEditReview}
              >
                Update Review
              </button>
            </Form>
            <p />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReviewForm;
