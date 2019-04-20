import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Selfport from './components/Selfport/Selfport';
import Aboutme from './components/Aboutme/Aboutme';
import Fade from 'react-reveal/Fade';
// import Portfolio from './components/Portfolio/Portfolio';
import Carousel from 'nuka-carousel';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressCard, faFolderOpen, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Skills from './components/Skills/Skills';

library.add(
  faUserCircle,
  faFolderOpen,
  faAddressCard,
  faHome,
  faLinkedin,
  faGithub,
  faInstagram,

);

class App extends Component {
    constructor() {
    super();
    this.state = {
      source: [ "https://steamuserimages-a.akamaihd.net/ugc/781784168991145284/150710A93A25AFD1045C9E41F2AABA3FFD5510F9/",
                "https://i.pinimg.com/originals/b7/f4/1b/b7f41b7d12a94aa3f9020bad9781c74e.jpg",
                "https://imagesvc.timeincapp.com/v3/fan/image?url=https://dogoday.com/wp-content/uploads/getty-images/2017/07/651100650.jpeg&",
              ],
      sideBarOpen: false,
      slideIndex:0,
      length: 3,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: "left",
      transitionMode: "scroll",
      heightMode: "max",
      withoutControls: false,
    }; 
    this.sideBarToggleClickHandler = this.sideBarToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }
    sideBarToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideBarOpen: !prevState.sideBarOpen}
      });
    }
    backdropClickHandler = () => {
      this.setState({sideBarOpen:false});
    }
    handleImageClick() {
      this.setState({ underlineHeader: !this.state.underlineHeader });
    }
    
    render() {
      
      let sideBar;
      let backdrop;
      
      if (this.state.sideBarOpen) {
        sideBar = <SideBar />;
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      
      return (
        <div className="App" style={{height: '100%'}}>
        {sideBar}
        {backdrop}
          
        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler}/>
        <header className="App-header" >
          <h1>Steven Tu</h1>

          <Fade top>
          {/* <Selfport /> */}
            <Aboutme />
          </Fade>

          {/* <Fade top cascade> */}
        
          <Skills />
          {/* </Fade> */}

        {/* <Fade> */}
      <h2>Btw check out corgies</h2>
          <div className="carousel">
      <Carousel
        withoutControls={this.state.withoutControls}
        transitionMode={this.state.transitionMode}
        cellAlign={this.state.cellAlign}
        slidesToShow={this.state.slidesToShow}
        wrapAround={!this.state.wrapAround}
        slideIndex={this.state.slideIndex}
        heightMode={this.state.heightMode}
        >
    
        {this.state.source.slice(0, this.state.length).map((source, index) => (
          <img
          src= {`${source}`}
          alt={`Slide ${index + 1}`}
          key={source}
          onClick={this.handleImageClick}
          style={{
            height:
            this.state.heightMode === "current" ? 100 * (index + 1) : 400
          }}
          />
          
          ))}
        <iframe className="corgi-video"src='https://www.youtube.com/embed/oVXZTmi2ruI'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
       
        />
        
      </Carousel>
   
    </div>
    </header>

    {/* </Fade> */}
          {/* <h1> Coming soon Instagram Portion</h1> */}
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
