import React, { Component } from 'react';

class Review extends Component {
  state = {
    review: null,
    userId: null,
    movieId: null,
    twitterhandle: '',
    rating: null,
    textBody: ''
  };

  render() {
    const { rating, textBody } = this.props.review;

    return (
      <div>
        <p>rating: {rating}</p>
        <p>textbody: {textBody}</p>
      </div>
    );
  }
}

export default Review;
