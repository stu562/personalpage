import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import ContactMenu from './components/ContactMenu/ContactMenu'
import Backdrop from './components/Backdrop/Backdrop';
import Aboutme from './components/Aboutme/Aboutme';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import Skills from './components/Skills/Skills';

class App extends Component {
    constructor() {
    super();
    this.state = {
      source: [ 
                "https://github.com/stu562/landingpage/raw/master/img/whatIfySShot.png?raw=true",
                "https://github.com/stu562/todolist/raw/master/screenshots/528dc36016fda3787d824388d7667643.gif?raw=true",
                "https://github.com/stu562/hrext06-myCruddyApp/raw/master/screenshot/eebfd16f3166c624b8d9ac645c10559c.gif?raw=true",
                "https://imagesvc.timeincapp.com/v3/fan/image?url=https://dogoday.com/wp-content/uploads/getty-images/2017/07/651100650.jpeg&",
              ],
      sideBarOpen: false,
      contactOpen: false,
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

    contactToggleClickHandler = () => {
      this.setState((prevState) => {
        return {contactOpen: !prevState.contactOpen}
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
      let contactMenu;
      
      if (this.state.sideBarOpen) {
        sideBar = <SideBar />;
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      if (this.state.contactOpen) {
        contactMenu = <ContactMenu />;
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      
      return (
        <div className="App" style={{height: '100%'}}>
        {contactMenu}
        {sideBar}
        {backdrop}

        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} contactToggleClickHandler={this.contactToggleClickHandler}/>
        <header className="App-header" >
          <h1>Steven Tu</h1>

          <div className="carousel">
      <Carousel
        autoplay="1"
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
        <video className="heart-video"src='https://r5---sn-a5msen7z.c.drive.google.com/videoplayback?id=da7f06e7faf33878&itag=22&source=webdrive&requiressl=yes&mm=30&mn=sn-a5msen7z&ms=nxu&mv=m&pl=32&sc=yes&ttl=transient&ei=tcW7XKvtOde_uQLh7qr4Cg&susc=dr&driveid=14Z_hgJrv7GsNqluVwriP-KdirV1iHe57&app=texmex&mime=video/mp4&dur=108.553&lmt=1555454723831563&mt=1555809636&ip=2605:e000:1520:478e:189b:7137:f755:e924&ipbits=0&expire=1555824118&cp=QVNKV0lfU1FPSVhOOjV0cE9KN1BWQVZw&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ttl,ei,susc,driveid,app,mime,dur,lmt,cp&signature=7C27C3FB3001B1A3F082115719C311B0B18AE43DD5327CB466FC3CD71477E5AB.B211B6171AE1B067E57B1FF96146772B947CA469ADE4FC8F2BE6E2812370B344&key=us0&cpn=JHmpEKf57oLdX9OQ&c=WEB_EMBEDDED_PLAYER&cver=20190417'
        autoplay='1' 
        muted='1'
        controls='1'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        />
        
      </Carousel>
   
    </div>

          <h2>Minalistic & elegant</h2>
          <Fade top>
            <Aboutme />
          </Fade>
          <Fade top >
            <Skills />
          </Fade>

          
    </header>

        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
