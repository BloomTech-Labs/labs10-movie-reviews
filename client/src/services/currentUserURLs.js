export const currentUser =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/current_user'
    : 'http://localhost:5000/auth/current_user';

export const currentReviews =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/api/reviews'
    : 'http://localhost:5000/api/reviews';

export const editDeleteReviews = id => {
  if (process.env.NODE_ENV === 'production') {
    debugger;
    return `https://labs10-movie-reviews.herokuapp.com/api/reviews/${id}`;
  } else {
    debugger;
    return `http://localhost:5000/api/reviews/${id}`;
  }
  // return process.env.NODE_ENV === 'production'
  // ? `https://labs10-movie-reviews.herokuapp.com/api/reviews/${id}` :
  //   `http://localhost:5000/api/reviews/${id}`;
};

export const payment =
  process.env.NODE_ENV === 'production'
    ? `http://labs10-movie-reviews.herokuapp.com/api/payment`
    : `http://localhost:5000/api/payment`;
