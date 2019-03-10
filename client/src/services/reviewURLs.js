export const reviews =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/reviews`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/api/reviews`;

export const reviewById = id => {
  if (process.env.NODE_ENV === 'production') {
    debugger;
    return `${process.env.REACT_APP_PROD_SERVER_URI}/api/reviews/${id}`;
  } else {
    return `${process.env.REACT_APP_DEV_SERVER_URI}/api/reviews/${id}`;
  }
};
