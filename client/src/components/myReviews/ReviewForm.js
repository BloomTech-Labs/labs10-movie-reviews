import React, { Component } from 'react';
import axios from 'axios';
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
    userId: 0,
    movieId: 0,
    name: '',
    rating: 0,
    textBody: '',
    review: 0
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
      userId: this.state.userId,
      movieId: this.state.movieId,
      name: this.state.name,
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
          name: response.data.name,
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

  // allows us to create a new review and post it to the API
  handleWriteNewReview = event => {
    event.preventDefault();
    const review = {
      userId: this.state.userId,
      movieId: this.props.match.params.id,
      name: this.state.name,
      rating: this.state.rating,
      textBody: this.state.textBody
    };

    axios
      .post('http://localhost:5000/api/reviews', review)
      .then(response => {
        this.setState({
          userid: response.data.userId,
          movieId: response.data.movieId,
          name: response.data.name,
          rating: response.data.rating,
          textBody: response.data.textBody
        });
        console.log('response: ', response);
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
    this.props.history.push('/myreviews');
  };

  render() {
    console.log('id in render: ', this.props.match.params.id);
    console.log('props in review form: ', this.props.location.state);
    console.log('all props in review form: ', this.props);

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
                <p>userId</p>
                <input
                  name="userId"
                  placeholder="1"
                  value={this.state.userId}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-div">
                <p>name</p>
                <input
                  name="name"
                  placeholder="Jane Smith"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <div className="form-div">
                  <p>Rating</p>
                  <input
                    name="rating"
                    placeholder="1-5"
                    value={this.state.rating}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <Label for="exampleText">Text Area</Label>
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
