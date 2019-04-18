import React from 'react';
import './SideBar.css';
import Selfport from '../Selfport/Selfport';

const SideBar = props => (
  <nav>
    <ul className="side-bar">
      <li><h1>Steven Tu</h1></li>
        <Selfport />
      <li><a href="/"> Portfolio </a></li>
      <li><a href="/"> LinkedIn </a></li>
      <li><a href="/"> Instagram </a></li>
      <li><a href="/"> GitHub </a></li>
      <li>stu562@gmail.com</li>
      <li>
      </li>
    </ul>
  </nav>
)

export default SideBar;