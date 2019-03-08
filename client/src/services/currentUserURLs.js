export const currentUser =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/auth/current_user`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/auth/current_user`

export const currentReviews =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/reviews`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/api/reviews`

export const editDeleteReviews = id => {
  if (process.env.NODE_ENV === 'production') {
    debugger;
    return `${process.env.REACT_APP_PROD_SERVER_URI}/api/reviews/${id}`;
  } else {
    return `${process.env.REACT_APP_DEV_SERVER_URI}/api/reviews/${id}`;
  }
  // return process.env.NODE_ENV === 'production'
  // ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/reviews/${id}` :
  //   `${process.env.REACT_APP_DEV_SERVER_URI}/api/reviews/${id}`;
};

export const payment =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/payment`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/api/payment`;
