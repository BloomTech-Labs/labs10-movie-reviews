import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import SingleMovieView from './components/home/SingleMovieView';
import Navigation from './components/navbar/Navigation';
// import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
        {/* <Route exact path="/landing" component={Landing} /> */}
      </div>
    );
  }
}

export default App;
