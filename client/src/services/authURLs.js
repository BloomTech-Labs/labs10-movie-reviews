export const twitterLogin =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/twitter'
    : 'http://localhost:5000/auth/twitter';

export const logout =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/logout'
    : 'http://localhost:5000/auth/logout';

export const googleLogin =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/google'
    : 'http://localhost:5000/auth/google';