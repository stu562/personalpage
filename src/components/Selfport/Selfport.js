import React from 'react';
import './Selfport.css';
import Headshot from '../Img/selfport.jpeg';

const Selfport = (props) => (
  <div>
    <img src={Headshot} className="self-port" alt="whoops"/>
  </div>
)

export default Selfport;