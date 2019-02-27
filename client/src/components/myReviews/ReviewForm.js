import React, { Component } from 'react';
import axios from 'axios';

class ReviewForm extends Component {
  state = {
    userId: 0,
    movieId: 0,
    twitterhandle: '',
    rating: 0,
    textBody: '',
    review: 0
  };
  // allows us to add twitterhandle, rating and textBody info for new review created on state
  // sets review id to this.id for use in deleting
  get id() {
    return this.props.match.params.id;
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // allows us to create a new review and post it to the API
  handleWriteNewReview = event => {
    const review = {
      userId: this.state.userId,
      movieId: this.id,
      twitterhandle: this.state.twitterhandle,
      rating: this.state.rating,
      textBody: this.state.textBody
    };

    axios
      .post('http://localhost:5000/api/reviews', review)
      .then(response => {
        this.setState({
          userid: response.data.userId,
          movieId: response.data.movieId,
          twitterhandle: response.data.twitterhandle,
          rating: response.data.rating,
          textBody: response.data.textBody
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(props) {
    console.log('id in render: ', this.props.match.params.id);
    return (
      <form>
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
          <p>twitterhandle</p>
          <input
            name="twitterhandle"
            placeholder="@flute19902"
            value={this.state.twitterhandle}
            onChange={this.handleInputChange}
          />
          <div className="form-div">
            <input
              name="rating"
              placeholder="1-5"
              value={this.state.rating}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-div">
          <textarea
            rows="25"
            cols="75"
            type="text"
            placeholder="Review Content"
            maxLength="5000"
            value={this.state.textBody}
            name="textBody"
            onChange={this.handleInputChange}
          />
        </div>

        <button className="write-btn" onClick={this.handleWriteNewReview}>
          Write Review
        </button>
        {/* <button
          className="material-button-raised"
          onClick={props.handleEditReview}
        >
          Update Review
        </button> */}
      </form>
    );
  }
}

export default ReviewForm;
