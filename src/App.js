import React, { Component } from 'react';
import './App.css';
// import Aboutme from 'components/Aboutme';
import Toolbar from './components/Toolbar/Toolbar';
class App extends Component {
  render() {
    // < Aboutme />
    return (
      <div className="App">
      <Toolbar />
      <main style={{marginTop: '64px'}}></main>
        <header className="App-header">
          <h1>Steven Tu</h1>
          <h2>stu562@gmail.com</h2>
          <img src='selfport.jpeg' className="self-port" alt="whoops"/>
          <p>Steven was once a dreamer. He now works hard to be a go-getter, and is fueled by aspirations and achievements. 
            Steven majored BS in Biochemistry, AA in Dental Hygiene and is a licensed dental hygienist. 
            He was on-route in becoming a dentist. 
            However, he always had a love with technology, specifically the web and XR. 
            After working two years as a dental hygienist, he decided to make a career change and dive deep into software. 
            One of Steven qualities is thinking of others first. He treats patient, clients, co-workers, family, and friend all the same level of respect and kindness.
            There is always much to learn, new challenges to overcome and room for growth. 
            Steven aims to offer the world his creativity in the form of useful products and services.
            </p>

          <h1> Portfolio Carosel here as a component </h1>
          
        </header>
      </div>
    );
  }
}

export default App;
