import React from 'react';

import SingleReview from './SingleReview';

function MyReviewsList(props) {
  if (props.reviewslist.length === 0) {
    return <h1>No reviews found. Fetching data...</h1>;
  }
  return (
    <div className="review-section">
      <div className="reviews-list-wrapper">
        <h2>Your Reviews:</h2>
        <div className="reviews-card-wrapper">
          {props.reviewslist.map(review => (
            <div className="review-card">
              <SingleReview review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function ReviewDetails({ review }) {
//   const { textBody } = review;
//   return (
//     <div className="review-card">
//       <div className="text-body">
//         {textBody.length > 84 ? textBody.slice(0, 84) + '...' : textBody}
//       </div>
//     </div>
//   );
// }

export default MyReviewsList;
