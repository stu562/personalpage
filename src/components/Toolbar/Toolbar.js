import React from 'react';
import './Toolbar.css';
import SideBarToggleButton from '../SideBar/SideBarToggleButton';
import { SocialIcon } from 'react-social-icons';

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div><SideBarToggleButton click={props.sideBarClickHandler}/></div>
      <div className="toolbar__logo"><a href="/">Full Stack Web Developer</a></div>
      <div className="spacing"></div>   
      <div className="toolbar_navigation-items">
        <ul>

          <li><a href="/" >About me</a></li>
          <li><a href="/" >portfolio</a></li>
          <li>
            <SocialIcon bgColor="#ffcb9a" url="http://linkedin.com/in/steven-song-tu" style={{ height: '2rem', width: '2rem' }}/>
          </li>
          <li>
            <SocialIcon bgColor="#ffcb9a" url="https://www.instagram.com/anything.augmented/" style={{ height: '2rem', width: '2rem' }}/>
          </li>
          <li>
            <SocialIcon bgColor="#ffcb9a" url="https://github.com/stu562/" style={{ height: '2rem', width: '2rem' }}/>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;