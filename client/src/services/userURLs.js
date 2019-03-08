export const users =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}`
    : `${process.env.REACT_APP_DEV_SERVER_URI}`;

export const currentUser =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/auth/current_user`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/auth/current_user`;
