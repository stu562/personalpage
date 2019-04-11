import React, { Component } from 'react';
import './App.css';
// import Aboutme from 'components/Aboutme';
import Toolbar from './components/Toolbar/Toolbar';
class App extends Component {
  render() {
    // < Aboutme />
    return (
      <div className="App">
      <Toolbar />
      <main style={{marginTop: '64px'}}></main>
        <header className="App-header">
          <p>
            Here's to react for a personal page
          </p>
          <img src='selfport.jpeg' className="self-port"/>

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
