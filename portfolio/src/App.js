import React from 'react';
import Me from './pages/Me.js';
import Main from './pages/Main.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Interests from './pages/Interests.js';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';


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
