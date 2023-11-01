import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import Inquiry from './inquiry';

function App() {
  return (
    <div className="App" id ="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <h1 className='my-4'>Medway</h1>
        <div className='d-flex justify-content-center'>
          <Main />
        </div>
      </div>
    );
}

const Main = () => (
  <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/timeline' Component={Timeline}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/contact' Component={Contact}></Route>
  </Routes>
);

const Home = () => (
  <div className='home'>
    <h1>TIMELINE PLACEHOLDER</h1>
  </div>
);

const Timeline = () => (
  <div className='timeline'>
    <h1>Timeline PLACEHOLDER</h1>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>INFORMATION PLACEHOLDER</h1>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <Inquiry/>
  </div>
);



export default App;
