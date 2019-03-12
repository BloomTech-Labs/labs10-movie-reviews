import React from 'react';
import Review from './Review';

function MyReviewsList(props) {
  console.log('props in myrev list: ', props);
  if (props.reviewslist.length === 0) {
    return <h1>No reviews found. Fetching data...</h1>;
  }
  return (
    <div className="review-section">
      <div className="reviews-list-wrapper">
        <div className="reviews-card-wrapper">
          {props.reviewslist.map(review => (
            <div className="review-card" key={review.id}>
              <Review review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReviewsList;
