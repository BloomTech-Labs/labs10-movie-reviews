export const currentUser =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/current_user'
    : 'http://localhost:5000/auth/current_user';

export const currentReviews =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/api/reviews'
    : 'http://localhost:5000/api/reviews';
