import React from 'react';
import Me from './pages/Me.js';
import Main from './pages/Main.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Interests from './pages/Interests.js';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';


const navstyle ={
  position: 'fixed',
  top: 0,
  textAlign: 'right',
  listStyle: 'none',
  backgroundColor: 'transparent',
  fontSize: "2em",
  paddingRight: "20px",
  display: 'inline'
}

function App() {
  
  return (
    <div classname="App">
    <Main/>
    <Projects/>
    <About/>
    <Interests/>
    <Me/>
    
    
    </div>
  );
}

export default App;
