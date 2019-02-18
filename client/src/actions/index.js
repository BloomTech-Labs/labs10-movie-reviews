import axios from 'axios';

export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCHED_MOVIES = 'FETCHED_MOVIES';

export const ERROR = 'ERROR';
export const ADD_USER = 'ADD_USER';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const gettingMovies = () => {
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

// export const addingUser = newUser => {
//   const promise = axios.post('http://localhost:7000/members', newUser);
//   return dispatch => {
//     dispatch({ type: FETCHING_MOVIES });
//     promise
//       .then(response => {
//         dispatch({ type: ADD_USER, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const deletingUser = id => {
//   const promise = axios.delete(`http://localhost:7000/members/${id}`);
//   return dispatch => {
//     dispatch({ type: FETCHING_MOVIES });
//     promise
//       .then(response => {
//         dispatch({ type: DELETED });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };
