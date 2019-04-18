import React, { Component } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Selfport from './components/Selfport/Selfport';
import Aboutme from './components/Aboutme/Aboutme';
import Portfolio from './components/Portfolio/Portfolio';
import Carousel from 'nuka-carousel';

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];



class App extends Component {
  // state = {
  //   sideBarOpen: false,
  // }; 
  constructor() {
    super();
    this.state = {
      sideBarOpen: false,
      slideIndex:0,
      length: 6,
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
    backdropClickHandler = () =>{
      this.setState({sideBarOpen:false});
    }
    handleImageClick() {
      this.setState({ underlineHeader: !this.state.underlineHeader });
    }
    
    render() {
      let sideBar;
      let backdrop;
      // let classHide = this.state.isHide ? 'hide' : ''; 
      
      if (this.state.sideBarOpen) {
        sideBar = <SideBar />;
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      
      return (
        <div className="App" style={{height: '100%'}}>
        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler}/>

        {sideBar}
        {backdrop}
        <header className="App-header" >
          <h1>Steven Tu</h1>
          <Selfport />
          <Fade top>
            <Aboutme />
          </Fade>
          <Fade top>
            <h2>Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Git</li>
            </ul>
          </Fade>
            
         
          <h1> Portfolio Carousel here as a component </h1>
          <Portfolio />

          <div style={{ width: "50%", margin: "auto" }}>
      <Carousel
        withoutControls={this.state.withoutControls}
        transitionMode={this.state.transitionMode}
        cellAlign={this.state.cellAlign}
        slidesToShow={this.state.slidesToShow}
        wrapAround={this.state.wrapAround}
        slideIndex={this.state.slideIndex}
        heightMode={this.state.heightMode}
        renderTopCenterControls={({ currentSlide }) => (
          <div
            style={{
              fontFamily: "Helvetica",
              color: "#fff",
              textDecoration: this.state.underlineHeader
                ? "underline"
                : "none"
            }}
          >
            Nuka Carousel: Slide {currentSlide + 1}
          </div>
        )}
      >
        {colors.slice(0, this.state.length).map((color, index) => (
          <img
            src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
              1}`}
            alt={`Slide ${index + 1}`}
            key={color}
            onClick={this.handleImageClick}
            style={{
              height:
                this.state.heightMode === "current" ? 100 * (index + 1) : 400
            }}
          />
        ))}
      </Carousel>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
          <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
          <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
          <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
          <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
          <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
        </div>
        <div>
          <button
            onClick={() =>
              this.setState(prevState => {
                const length = prevState.length === 6 ? 2 : 6;
                return {
                  length
                };
              })
            }
          >
            Toggle 2 Slides
          </button>
          <button
            onClick={() =>
              this.setState({
                transitionMode:
                  this.state.transitionMode === "fade" ? "scroll" : "fade"
              })
            }
          >
            Toggle Fade {this.state.transitionMode === "fade" ? "Off" : "On"}
          </button>
          <button
            onClick={() =>
              this.setState(prevState => ({
                wrapAround: !prevState.wrapAround
              }))
            }
          >
            Toggle Wrap Around
          </button>
        </div>
      </div>
      {this.state.transitionMode !== "fade" && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {this.state.slidesToShow > 1.0 && (
            <div>
              <button onClick={() => this.setState({ cellAlign: "left" })}>
                Left
              </button>
              <button onClick={() => this.setState({ cellAlign: "center" })}>
                Center
              </button>
              <button onClick={() => this.setState({ cellAlign: "right" })}>
                Right
              </button>
            </div>
          )}
          <div style={{ marginLeft: "auto" }}>
            <button
              onClick={() =>
                this.setState({
                  slidesToShow: this.state.slidesToShow > 1.0 ? 1.0 : 1.25
                })
              }
            >
              Toggle Partially Visible Slides
            </button>
            <button
              onClick={() =>
                this.setState({
                  heightMode:
                    this.state.heightMode === "current" ? "max" : "current"
                })
              }
            >
              Toggle Height Mode Current
            </button>
            <button
              onClick={() =>
                this.setState({
                  withoutControls: !this.state.withoutControls
                })
              }
            >
              Toggle Controls
            </button>
          </div>
        </div>
      )}
    </div>
          
          <h1> My tech interest pictured by Instagram </h1>
        </header>
      </div>
    );
  }
}

export default App;
