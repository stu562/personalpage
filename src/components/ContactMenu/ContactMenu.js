import React from 'react';
import './ContactMenu.css';
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

const ContactMenu = props => (
  <nav>
    <ul className="contact-menu">
          <li>
            <a >
              <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faAddressCard} fixedWidth/>
              stu562@gmail.com
            </a>
          </li>
        </ul>
  </nav>
)

export default ContactMenu;