import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Checkout App - best way to shop at your local stores.
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
