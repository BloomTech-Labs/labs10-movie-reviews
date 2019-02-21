import React from 'react';
import MappedItem from './MappedItem';

import './mappedItem.css';
import { Card } from 'reactstrap';
import Hero from './Hero/Hero';


const Home = (props) => {
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
            {props.movies.map(item => {
              return <MappedItem 
                key={item.id} 
                item={item} 
              />;
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
    </>
    );
  };

export default Home;
