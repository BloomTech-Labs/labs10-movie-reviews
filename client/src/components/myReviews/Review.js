import React from 'react';

const Review = props => {
  return (
    <div>
      <p>rating: {props.review.rating}</p>
      <p>textbody: {props.review.textBody}</p>
    </div>
  );
};

export default Review;
