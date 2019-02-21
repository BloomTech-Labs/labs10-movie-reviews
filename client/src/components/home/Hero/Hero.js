import React from 'react';
import axios from 'axios';
import HeroElement from './HeroElement';


import './Hero.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      random: '',
      randomTitle: '',
      resultLength: null,
      searchCriteria: '',
      searchResults: [],
      searching: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.getReleaseYear = this.getReleaseYear.bind(this);
  }

  //this will get popular movies from the TMDB API
  componentDidMount() {
    let promise = axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    promise
      .then(response => {
        console.log(response, "response")
        const random = Math.floor(Math.random() * response.data.results.length); //instantiates a random number between 0 and length of response.data.results array
        const title = response.data.results[random].title;
        //grabs random movie title from response data results array
        const backdropURL =
          'https://image.tmdb.org/t/p/original' +
          response.data.results[random].backdrop_path;
        //grabs random movie backdrop_path (background image) from response data results array
        this.setState({
          movies: response.data.results,
          random: backdropURL,
          randomTitle: title
        });
        //sets the information retrieved onto state
      })
      .catch(err => {
        console.log(err);
      });
  }

  //this takes the release date from TMDB and finds the year using regex so we can post it along with the movie.
  getReleaseYear(string) {
    let regex = /(18|19|20)\d{2}/g;

    let found = string.match(regex);

    if (!found) {
      return "";
    }
    return "(" + found + ")";
  }

  // getMovieDetailsHandler(id) {
  //   /* TODO:
  //   1. =====axios request =====
  //       axios.get : `https://api.themoviedb.org/3/movie/${id}?api_key={api_key}&append_to_response=videos`
  //   2. returns a promise
  //   3. then (response => {
  //       console.log(response) to see what it looks like coming back and figure out logic.
  //   4. catch errors
  //   })
  // }*/

  //this handles input when user types in the search box to search for movie and places that on state
  handleChange(event){
    this.setState({ searchCriteria: event.target.value });
  };

  /* 
=================================================================================
  What does the search axios get request in searchHandler mean?? Let's break it up :
=================================================================================
  1. searchHandler return search logic using TMDB search endpoint
  2. https://api.themoviedb.org/3/ == base URL
  3. search/ means we will search
  4. movie? == queries movies table
  5. api_key=${process.env.REACT_APP_API} == our personal API key
  6. &language=en-US == queries English results only
  7. &query=${this.state.searchCriteria} == grabs our searchCriteria off of state and queries the database
  8. &include_adult=false == boolean that excludes adult films.
=================================================================================
  
  */

  searchHandler(){
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API
        }&language=en-US&query=${this.state.searchCriteria}&include_adult=false`
      )
      .then(response => {
        this.setState({searching: true})
        const resultLength = () => {
          if (response.data.results.length === 0) {
            return 0;
          }
          else return response.data.results.length;
        }
        this.setState({ searchResults: response.data.results, resultLength: resultLength() });
        //this sets the searchResults on state
      })
      .catch(err => {
        console.log(err);
      });
  };

  //render puts it on the page!

  render() {
    //TODO: loading screen
    return (
      <div
        className="hero"
        style={{ backgroundImage: 'url(' + this.state.random + ')' }}
      >
        {/* used inline style to create background image since it is on state */}
        <div className="header-overlay">
          
            <HeroElement 
              className={this.state.resultLength > 0 ? "search-result-header" : "hidden"}
              searchHandler={this.searchHandler}
              getReleaseYear={this.getReleaseYear}
              handleChange={this.handleChange}
              randomTitle={this.state.randomTitle}
              resultLength={this.state.resultLength}
              searchCriteria={this.state.searchCriteria}
              searchResults={this.state.searchResults}
            />
          </div>
        </div>
    );
  }
}

export default Hero;
