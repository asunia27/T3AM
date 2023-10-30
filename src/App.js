import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {NavLink, Routes, Route} from 'react-router-dom';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App" id ="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <h1>Medway</h1>
        <Navigation />
        <Main />
      </div>
    );
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>School Information</NavLink></li>
      <li><NavLink to='/contact'>Contact a Professional</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/contact' Component={Contact}></Route>
  </Routes>
);

const Home = () => (
  <div className='home'>
    <h1>TIMELINE PLACEHOLDER</h1>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>INFORMATION PLACEHOLDER</h1>
  </div>
);

const Contact = () => (
  <div className='contact'>
    
  </div>
);



export default App;
