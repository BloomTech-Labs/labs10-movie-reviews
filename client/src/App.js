import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Hero from './components/home/Hero';
import Home from './components/home/Home';
import Navigation from './components/navbar/Navigation';
import SingleMovieView from './components/home/SingleMovieView';

// import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/hero" component={Hero} />
        {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
      </div>
    );
  }
}

export default App;
