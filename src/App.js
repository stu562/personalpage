import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';

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
          <img src='selfport.jpeg' className="self-port" alt="whoops"/>
          <p>Steven was once a dreamer. He now works hard to be a go-getter, and is fueled by aspirations and achievements. 
            Steven majored BS in Biochemistry, AA in Dental Hygiene and is a licensed dental hygienist. 
            He was on-route in becoming a dentist. 
            However, he always had a love with technology, specifically the web and XR. 
            After working two years as a dental hygienist, he decided to make a career change and dive deep into software. 
            One of Steven's qualities is thinking of others first. He treats patients, clients, co-workers, family, and friends with the same level of respect and kindness.
            There is always much to learn, new challenges to overcome and room for growth. 
            Steven aims to offer the world his creativity in the form of useful products and services.
            </p>

          <h2>Skills</h2>
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
