import {
  FETCHING_MOVIES,
  FETCHED_MOVIES,
  ERROR,
  ADD_USER,
  DELETED,
  UPDATED
} from '../actions';

const initialState = {
  moviesArr: [],
  loading: false,
  success: false,
  error: null
};

export const UserReducer = (state = initialState, action) => {
  console.log('action received: ', action);
  switch (action.type) {
    case FETCHING_MOVIES:
      return Object.assign({}, state, { loading: true });
    case FETCHED_MOVIES:
      console.log(' action payload: ', action.payload);
      return Object.assign({}, state, {
        loading: false,
        success: true,
        movies: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        success: false,
        loading: false
      });
    case ADD_USER:
      console.log(' action payload in add_user: ', action.payload);
      return Object.assign({}, state, {
        loading: false,
        success: true,
        movies: action.payload
      });
    case DELETED:
      return Object.assign({}, state, {
        loading: false,
        success: true,
        movies: action.payload
      });
    case UPDATED:
      return Object.assign({}, state, {
        loading: false,
        success: true,
        movies: action.payload
      });
    default:
      return state;
  }
};

export default UserReducer;
