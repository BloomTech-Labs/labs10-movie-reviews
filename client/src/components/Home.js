import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { Button } from 'reactstrap';
import { gettingMovies } from '../actions';
import { connect } from 'react-redux';
import MappedItem from './MappedItem';

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
        <span>Welcome back, User!</span>
        <div className="buttons">
          {/* <Link to='/local'><Button className='local-button'>Local</Button></Link>
                    <Link to='/local'><Button className='online-button'>Online</Button></Link> */}
          <div className="featured">
            <h2>Featured Review</h2>
            <span className="imgFeat" />
            <p>Name of the movie</p>
            <p>Name of the user</p>
          </div>
          <div className="featured">
            <h2>Popular Movies</h2>
            <span className="imgFeat" />
            {this.props.movies.results.map(item => {
              return <MappedItem key={item.id} item={item} />;
            })}
            <p>Name of the movie</p>
          </div>
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
