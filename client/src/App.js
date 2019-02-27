import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home/Home';
import Auth from './components/DummyAuth/Auth';
import MyReviews from './components/myReviews/MyReviews';
import ReviewForm from './components/myReviews/ReviewForm';
// import SingleMovieView from './components/home/SingleMovieView';
import Navigation from './components/navbar/Navigation';
import Dummyusers from './components/dummyuser/DummyUser';
import './App.css';
import SearchResults from './components/home/Hero/SearchResults';
import MovieRev from './components/movieReviews/MovieRev';
import PremiumView from './components/premium/PremiumView';
import About from './components/footer/about/About';
import Contact from './components/footer/contact/Contact';
import Privacy from './components/footer/privacy/PrivacyPolicy';
import Terms from './components/footer/terms/Terms';
import Footer from './components/footer/Footer';

//Add constructor/expanded state on App Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      random: '',
      randomTitle: '',
      resultLength: null,
      searchCriteria: '',
      searchResults: [],
      loading: true
    };
    //these are bound because I am not using arrow functions
    this.handleChange = this.handleChange.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.getReleaseYear = this.getReleaseYear.bind(this);
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
          randomTitle: title,
          loading: false
        });
        console.log('movies: ', this.state.movies);
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
      return '';
    }
    return '(' + found + ')';
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
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

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

  searchHandler() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API
        }&language=en-US&query=${this.state.searchCriteria}&include_adult=false`
      )
      .then(response => {
        this.setState({ loading: true });
        const resultLength = () => {
          if (response.data.results.length === 0) {
            return 0;
          } else return response.data.results.length;
        };
        this.setState({
          searchResults: response.data.results,
          resultLength: resultLength(),
          loading: false
        });
        //this sets the searchResults on state
        console.log(this.props, 'props from search');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //loading state keeps static HTML from showing

    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div className="App">
        <Navigation
          handleChange={this.handleChange}
          loading={this.state.loading}
          searchHandler={this.searchHandler}
          searchCriteria={this.state.searchCriteria}
          searchResults={this.state.searchResults}
        />
        {/* exact path limits the page from rendering to 
        anything other than the path mentioned */}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                movies={this.state.movies}
                loading={this.state.loading}
                randomBackgroundImage={this.state.random}
                randomTitle={this.state.randomTitle}
                getReleaseYear={this.getReleaseYear}
                handleChange={this.handleChange}
                searchHandler={this.searchHandler}
                searchResults={this.state.searchResults}
                searchCriteria={this.state.searchCriteria}
              />
            )}
          />
          {/* Route goes to the search query - passed props through route
          so that I wouldn't have to do it through Link on component file*/}
          <Route
            path={`/search`}
            render={props => (
              <SearchResults
                {...props}
                movies={this.state.movies}
                loading={this.state.loading}
                randomBackgroundImage={this.state.random}
                randomTitle={this.state.randomTitle}
                getReleaseYear={this.getReleaseYear}
                handleChange={this.handleChange}
                searchHandler={this.searchHandler}
                searchResults={this.state.searchResults}
                searchCriteria={this.state.searchCriteria}
              />
            )}
          />
          <Route path="/dummyusers" component={Dummyusers} />
          <Route path="/myreviews" component={MyReviews} />
          <Route path="/reviewform/:id" component={ReviewForm} />
          <Route path="/moviereviews/:id" component={MovieRev} />
          <Route path="/premium" component={PremiumView} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/auth" component={Auth} />
          {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
