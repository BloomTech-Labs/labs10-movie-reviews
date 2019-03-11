import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class ratingStars extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue }, () => {
      this.setState({ rating: this.state.rating });
      console.log('stars num: ', this.state.rating);
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ rating: [...this.state.rating, nextProps.addToList] }); // notice the difference this.props vs nextProps
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarHover={this.onStarClick.bind(this)}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
