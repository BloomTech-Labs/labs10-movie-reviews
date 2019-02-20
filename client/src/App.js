import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import Landing from './components/Landing';
import Home from './components/home/Home';
import Hero from './components/home/Hero';
// import SingleMovieView from './components/home/SingleMovieView';
import Navigation from './components/navbar/Navigation';
import BillingView from './components/billing/BillingView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/hero" component={Hero} />
        <Route path="/billing" component={BillingView} />
        {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
      </div>
    );
  }
}

export default App;
