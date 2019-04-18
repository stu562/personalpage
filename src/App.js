import React, { Component } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Selfport from './components/Selfport/Selfport';
import Aboutme from './components/Aboutme/Aboutme';
// import Portfolio from './components/Portfolio/Portfolio';



class App extends Component {
  state = {
    sideBarOpen: false,
  }; 

  sideBarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  }
  backdropClickHandler = () =>{
    this.setState({sideBarOpen:false});
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

          <h1> My tech interest pictured by Instagram </h1>
        </header>
      </div>
    );
  }
}

export default App;
