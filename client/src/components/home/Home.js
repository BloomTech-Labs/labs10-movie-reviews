import React from 'react';
import Hero from './Hero/Hero';
import Jumbotron from './Jumbotron';
import MappedItem from './MappedItem';
import { Row, Card } from 'reactstrap';
import './mappedItem.css';

const Home = props => {
  const movies = props.movies.slice(0, 8);

  return (
    <>
      <Hero
        loading={props.loading}
        random={props.randomBackgroundImage}
        randomTitle={props.randomTitle}
        getReleaseYear={props.getReleaseYear}
        handleChange={props.handleChange}
        searchHandler={props.searchHandler}
        searchResults={props.searchResults}
        searchCriteria={props.searchCriteria}
      />
      <div>
        <h6>CineView let's you...</h6>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <p class="card-text">
                  Write reviews on any movie from A Trip To The Moon to your box
                  office favorite
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <p class="card-text">Rate each film on a five-star scale</p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <p class="card-text">Keep a diary of the flims you have seen</p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured">
        <h2 className="my-4">Popular Movies</h2>
        <div className="cardWrapper">
          <Row className="nopadding">
            {movies.map(item => {
              console.log('results', item);
              return <MappedItem key={item.id} item={item} />;
            })}
          </Row>
        </div>
      </div>
      <div className="popularReviewers">
        {/* <h1>Popular Reviewers</h1> */}
        <Card>
          <div className="cardWrapper" />
        </Card>
      </div>
    </>
  );
};

export default Home;
