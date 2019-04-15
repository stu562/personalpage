import React from 'react';
import './SideBarToggleButton.css';

const SideBarToggleButton = props => (
  <button className="toggle-button">
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default SideBarToggleButton;