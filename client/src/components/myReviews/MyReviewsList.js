import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

function MyReviewsList(props) {
  // console.log('props in myrev list: ', props);
  if (props.reviewslist.length === 0 && props.premium === 1) {
    return <h4>No reviews found.</h4>;
  }

  else if (props.premium === 0) {
    return <h4>Become <Link to="/premium">premium</Link> to write a review today!</h4>
  }
  
  
  return (
    <div className="review-section">
      <div className="reviews-list-wrapper">
        <div className="reviews-card-wrapper">
          {props.reviewslist.map(review => (
            <div className="review-card" key={review.id}>
              <Review 
                getReleaseYear={props.getReleaseYear}
                review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReviewsList;
