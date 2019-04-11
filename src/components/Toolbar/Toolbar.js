import React from 'react';
import './Toolbar.css';

const Toolbar = prop => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo"><a href="/">Full Stack Web Developer</a></div>
      <div className="toolbar_navigation-item">
        <ul>
          <li><a href="/"> About me</a></li>
          <li><a href="/"> Portfolio</a></li>
          <li><a href="/"> Resume</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;