import axios from 'axios';

export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCHED_MOVIES = 'FETCHED_MOVIES';

export const ERROR = 'ERROR';
export const ADD_USER = 'ADD_USER';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';
const baseURL = 'https://api.themoviedb.org/3/';

export const gettingMovies = pageNum => {
  const promise = axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      process.env.REACT_APP_API
    }&language=en-US&page=1`
  );
  console.log('Request: ', promise);
  return dispatch => {
    dispatch({ type: FETCHING_MOVIES });
    promise
      .then(response => {
        dispatch({ type: FETCHED_MOVIES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const gettingRandomMovie = pageNum => {
  const promise = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_API
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  console.log('Request in random: ', promise);
  return dispatch => {
    dispatch({ type: FETCHING_MOVIES });
    promise
      .then(response => {
        dispatch({ type: FETCHED_MOVIES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const gettingMovieId = id => {
  console.log('id: ', id);
  const promise = axios.get(
    `https://api.themoviedb.org/3/movie/{id}?api_key=${
      process.env.REACT_APP_API
    }&language=en-US`
  );
  console.log('Request in getting movie by id: ', promise);
  return dispatch => {
    dispatch({ type: FETCHING_MOVIES });
    promise
      .then(response => {
        dispatch({ type: FETCHED_MOVIES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
