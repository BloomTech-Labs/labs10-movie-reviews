export const twitterLogin =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/auth/twitter`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/auth/twitter`

export const logout =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/auth/logout`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/auth/logout`

export const googleLogin =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/auth/google`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/auth/google`