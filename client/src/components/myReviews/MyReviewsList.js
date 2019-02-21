import React from 'react';

function MyReviewsList(props) {
  if (props.ReviewsList.length === 0) {
    return <h1>No reviews found. Fetching data...</h1>;
  }
  return (
    <div className="review-section">
      <div className="reviews-list-wrapper">
        <h2>Your Reviews:</h2>
        <div className="reviews-card-wrapper">
          {props.ReviewsList.map(review => (
            <div className="review-card">
              {/* <p>twitterhandle: {review.twitterhandle}</p> */}
              <p>rating: {review.rating}</p>
              <p>textbody: {review.textBody}</p>
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
