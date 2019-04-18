import React from 'react';
// import arrowRight from './img/arrow-right.svg';
// import arrowLeft from './img/arrow-left.svg';
import './Portfolio.css'
import Carousel from 'nuka-carousel';



  const Portfolio = (props) => (
    // <div className=""> 
    //   HEY THIS IS MY Portfolio
    // </div>
    <Carousel>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
  </Carousel>
)

// // class Portfolio extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         // holding the current index for the image that has to be rendered at each time on the screen 
//         currentImageIndex: 0,
//      // array of the source links to the images, simple placeholders for now
//      images: [
//        'https://via.placeholder.com/200x150?text=first',
//        'https://via.placeholder.com/200x150?text=second',
//        'https://via.placeholder.com/200x150?text=third',
//        'https://via.placeholder.com/200x150?text=fourth',
//        'https://via.placeholder.com/200x150?text=fifth',
//        'https://via.placeholder.com/200x150?text=sixth',
//        'https://via.placeholder.com/200x150?text=seventh',
//        'https://via.placeholder.com/200x150?text=eighth',
//        'https://via.placeholder.com/200x150?text=ninth',
//        'https://via.placeholder.com/200x150?text=tenth'
//       ],
//       // imported images of right and left arrows
//       arrowNext: arrowRight,
//       arrowPrev: arrowLeft
//     };
    
export default Portfolio