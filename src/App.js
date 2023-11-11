
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import Inquiry from './inquiry';
import SearchPage from './searchpage'
import TimelineDisplay from './timeline';
import {ToastContainer} from 'react-toastify';
import NodeEdit from './node-mod';
import 'react-toastify/dist/ReactToastify.css';
import Info from './moreinfo';
import './moreinfo.css'

function App() {
  return (
    <div className="App" id ="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <h1 className='my-4'>Medway</h1>
        <div className='d-flex justify-content-center'>
          <Main />
        </div>
        <ToastContainer/>
      </div>
    );
}

const Main = () => (
  <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/timeline' Component={Timeline}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/contact' Component={Contact}></Route>
    <Route path='/moreinfo/:id' element={<Info />} />
  </Routes>
);

const Home = () => (
  <div className='home'>
    <TimelineDisplay/>
  </div>
);

const Timeline = () => (
  <div className='timeline'>
    <h1>EDIT TIMELINE PLACEHOLDER</h1>
    <NodeEdit/>
  </div>
);

const About = () => (
  <div className='about'>
    <SearchPage></SearchPage>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <Inquiry/>
  </div>
);



export default App;
