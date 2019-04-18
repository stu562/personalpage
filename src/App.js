import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Selfport from './components/Selfport/Selfport';
import Aboutme from './components/Aboutme/Aboutme';
import Zoom from 'react-reveal/Zoom';
class App extends Component {
  state = {
    sideBarOpen: false,
  };
  
  sideBarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  };
  backdropClickHandler = () =>{
    this.setState({sideBarOpen:false});
  };


  render() {
    let sideBar;
    let backdrop; 
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
        <Zoom>
          <Selfport />
        </Zoom>
        
          <Aboutme />
          
        <Zoom>
          <h2>Skills</h2>
        </Zoom>

          <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Git</li>
            </ul>
          <h1> Portfolio Carousel here as a component </h1>
          <h1> Render Instagram Api </h1>
        </header>
      </div>
    );
  }
}

export default App;
