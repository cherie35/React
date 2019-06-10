import React from 'react';
import Me from './pages/Me.js';
import Main from './pages/Main.js';
import Projects from './pages/Projects.js';
import Prj2 from './pages/Project2.js';
import Prj3 from './pages/Project3.js';
import Prj4 from './pages/Project4.js';
import Interests from './pages/Interests.js';
import Footer from './components/Footer.js';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

class App extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render(){  
  return (
    
<div classname="App">
  <Main/>
  <Projects/>
  <Prj2/>
  <Prj3/>
  <Interests/>
  <Me/>
</div>
 );
}
}
export default App;
