import React from 'react';
import Hero from './Hero/Hero';
import MappedItem from './MappedItem';
import { Row } from 'reactstrap';
import './mappedItem.css';
import FeatureList from './FeatureList';

const Home = props => {
  const randomArr = props.movies.sort(function() {
    return 0.5 - Math.random();
  });
  const start = Math.floor(Math.random() * 12);
  const end = start + 8;
  const movies = randomArr.slice(start, end);

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
      <div className="featured">
        <h4 className="popular-title">Today's Popular Movies</h4>
        <div className="cardWrapper">
          <Row className="nopadding">
            {movies.map(item => {
              // console.log('results', item);
              return <MappedItem key={item.id} item={item} />;
            })}
          </Row>
        </div>
      </div>
      <FeatureList />
    </>
  );
};

export default Home;
