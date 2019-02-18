import { FETCHING_MOVIES, FETCHED_MOVIES, ERROR } from '../actions';

const initialState = {
  moviesArr: [],
  loading: false,
  success: false,
  error: null
};

export const moviesReducer = (state = initialState, action) => {
  //   console.log('action received: ', action);
  switch (action.type) {
    case FETCHING_MOVIES:
      return Object.assign({}, state, { loading: true });
    case FETCHED_MOVIES:
      //   console.log(' action payload: ', action.payload);
      return Object.assign({}, state, {
        loading: false,
        success: true,
        moviesArr: action.payload.results
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        success: false,
        loading: false
      });
    default:
      return state;
  }
};
