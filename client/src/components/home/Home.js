import React from 'react';
import Hero from './Hero/Hero';
import Jumbotron from './Jumbotron';
import MappedItem from './MappedItem';
import { Row, Card } from 'reactstrap';
import './mappedItem.css';
import FeatureList from './FeatureList';

const Home = props => {
  const start = Math.floor(Math.random() * 12);
  const end = start + 8;
  console.log("start",start);
  console.log("start",end);
  const movies = props.movies.slice(start, end);

  return (
    <>
      <Hero
        {...props}
        loading={props.loading}
        random={props.randomBackgroundImage}
        randomTitle={props.randomTitle}
        getReleaseYear={props.getReleaseYear}
        handleChange={props.handleChange}
        searchHandler={props.searchHandler}
        searchResults={props.searchResults}
        searchCriteria={props.searchCriteria}
      />

      <FeatureList />

      <div className="featured">
        <h2 className="popular-title">Popular Movies</h2>
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
