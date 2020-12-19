import logo from './logo.svg';
import './App.css';
import JokeList from './JokeList'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}


export default App;
