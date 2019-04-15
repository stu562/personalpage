import React from 'react';
import './Toolbar.css';

const Toolbar = prop => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo"><a href="/">Full Stack Web Developer</a></div>
      <div className="spacing"></div>   
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/"> About me</a></li>
          <li><a href="/"> Portfolio</a></li>
          <li><a
            className="App-link"
            href="https://github.com/stu562/"
            target="_blank"
            rel="noopener noreferrer"
          > Github</a></li>
          <li>          <a
            className="App-link"
            href="https://www.linkedin.com/in/steven-song-tu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a></li>
          <li><a href="/"> Resume</a></li>
          <li><a href="/"> Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;