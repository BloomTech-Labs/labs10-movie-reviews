import React from 'react';

const SingleReview = props => {
  return (
    <div>
      <p>rating: {props.review.rating}</p>
      <p>textbody: {props.review.textBody}</p>
    </div>
  );
};

export default SingleReview;
