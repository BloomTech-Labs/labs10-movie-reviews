export const customerDelete =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/customer/delete`
    : `${process.env.REACT_APP_DEV_SERVER_URI}api/customer/delete`;

export const customerPlan =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/customer/plan`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/api/customer/plan`;

export const makePayment =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PROD_SERVER_URI}/api/payment`
    : `${process.env.REACT_APP_DEV_SERVER_URI}/api/payment`;
