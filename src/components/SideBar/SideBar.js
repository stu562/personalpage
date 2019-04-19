import React from 'react';
import './SideBar.css';
import Selfport from '../Selfport/Selfport';
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

const SideBar = props => (
  <nav>
    <ul className="side-bar">
      <li><h1>Steven Tu</h1></li>
        <Selfport />
        
          <li>
            <a href="https://www.instagram.com/anything.augmented/">
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faUserCircle} fixedWidth />
                About Me
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/anything.augmented/">
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faFolderOpen} fixedWidth/>
              Portfolio
            </a>
          </li>

          <li>
            <a href="https://github.com/stu562/">
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faGithub} fixedWidth/>
              GitHub
            </a>
          </li>

          <li>
            <a href="http://linkedin.com/in/steven-song-tu">
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faLinkedin} fixedWidth/>
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/anything.augmented/">
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faInstagram} fixedWidth/>
              Instagram
            </a>

          </li>
          
          <li>
            <a >
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faAddressCard} fixedWidth/>
              stu562@gmail.com
            </a>
          </li>
        </ul>
  </nav>
)

export default SideBar;