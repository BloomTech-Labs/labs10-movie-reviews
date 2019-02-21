import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MappedItem from './MappedItem';

import axios from 'axios';
import './mappedItem.css';
import { Card } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }
  componentDidMount() {
    const promise = axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.REACT_APP_API
      }&language=en-US&page=1`
    );
    promise
      .then(response => {
        console.log('response: ', response);
        this.setState({
          movies: response.data.results,
          loading: false
        });
        console.log('movies: ', this.state.movies);
        //sets the information retrieved onto state
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log('props in home page: ', this.props);
    const { loading } = this.state;
    if (loading) {
      return null;
    }
    return (
      <div className="home-page">
        <h1>Welcome back, User!</h1>
        <div className="featured">
          <h2>Featured Review</h2>
          <span className="imgFeat" />
          <p>Name of the movie</p>
          <p>Name of the user</p>
        </div>
        <div className="featured">
          <h2>Popular Movies</h2>
          <div className="cardWrapper">
            {this.state.movies.map(item => {
              return <MappedItem key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div className="popularReviewers">
          <h1>Popular Reviewers</h1>
          <Card>
            <div className="cardWrapper" />
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
