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
            Here's to react for a personal page
          </p>
          <img src='selfport.jpeg' className="self-port" alt="logo"/>

          <a
            className="App-link"
            href="https://github.com/stu562/stu562.github.io/tree/development"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </header>
      </div>
    );
  }
}

export default App;
