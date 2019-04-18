import React from 'react';
import './Toolbar.css';
import SideBarToggleButton from '../SideBar/SideBarToggleButton';
// import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressCard, faFolderOpen, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(
  faUserCircle,
  faFolderOpen,
  faAddressCard,
  faHome,
  faLinkedin,
  faGithub,
  faInstagram,

);




const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div><SideBarToggleButton click={props.sideBarClickHandler}/></div>
      <div className="toolbar__logo"><a href="/">Full Stack Web Developer</a></div>
      <div className="spacing"></div>   
      <div className="toolbar_navigation-items">
        <ul >
        
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon className="toolbar_navigation-items" style={{ color: 'ffffff' }} size="2x" icon={faUserCircle} fixedWidth/>
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faFolderOpen} />
          </a>
          <a href="https://github.com/stu562/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faGithub} />
          </a>
          <a href="http://linkedin.com/in/steven-song-tu">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faAddressCard} />
          </a>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;