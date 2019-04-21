import React from 'react';
import './ContactMenuToggleButton.css';
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

const ContactMenuToggleButton = props => (
  
  <button className="toggle-button" onClick={props.click}>
    <FontAwesomeIcon style={{ color: 'ffffff' }} size="3x" icon={faAddressCard} fixedWidth/>
  </button>
);

export default ContactMenuToggleButton;