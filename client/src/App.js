import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import Landing from './components/Landing';
import Home from './components/home/Home';
import Hero from './components/home/Hero';
// import SingleMovieView from './components/home/SingleMovieView';
import Navigation from './components/navbar/Navigation';
import Dummyusers from './components/dummyuser/DummyUser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/hero" component={Hero} />
        <Route path="/dummyusers" component={Dummyusers} />
        {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
      </div>
    );
  }
}

export default App;
