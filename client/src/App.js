import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import SingleMovieView from './components/SingleMovieView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        
        </Header> */}
        <Route exact path="/" component={Home} />
        <Route path="/landing" component={Landing} />
        {/* <Route exact path="/movie/get/:id" component={SingleMovieView} /> */}
      </div>
    );
  }
}

export default App;
