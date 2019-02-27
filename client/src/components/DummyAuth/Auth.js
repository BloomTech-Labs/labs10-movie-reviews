import React from 'react';
import axios from 'axios';

class Auth extends React.Component {
  state = {
    userId: null,
    rating: null,
    textBody: '',
    reviews: '',
    users: ''
  };

  componentDidMount() {
    this.fetchReviews();
  }

  // allows us to get all the reviews data from the API
  fetchReviews = () => {
    axios
      .get('http://localhost:5000/api/users')
      .then(response => {
        console.log('response auth - Users: ', response);
        this.setState({
          users: response.data
        });
        return axios.get('http://localhost:5000/api/reviews');
      })
      .then(response => {
        console.log('response auth - Reviews: ', response);
        this.setState({
          reviews: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div />;
  }
}

export default Auth;
