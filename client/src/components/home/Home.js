import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { gettingMovies } from '../../actions';
import { connect } from 'react-redux';
import MappedItem from './MappedItem';
import './mappedItem.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.gettingMovies();
    setTimeout(() => this.setState({ loading: false }), 1000);
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
            {this.props.movies.moviesArr.map(item => {
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

const mapStateToProps = ({ movies }) => {
  console.log('state in map: ', movies);
  return {
    movies
  };
};

export default connect(
  mapStateToProps,
  { gettingMovies }
)(Home);
