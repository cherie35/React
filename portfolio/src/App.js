import React from 'react';
import {Link} from "react-scroll";
import Me from './pages/Me.js';
import Main from './pages/Main.js';
import Projects from './pages/Projects.js';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './App.css';

class App extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.attachRef = target => this.setState({ target });
    this.state = { show: false };
  }
  
  render(){ 
    const { show, target } = this.state; 
  return (
    <div classname="App">
      <nav className="navMenu">
				<ul>
        <OverlayTrigger key={"left"} placement={"left"} 
        overlay={<Tooltip id={`tooltip-main}`}>Home</Tooltip>}>
          
            <Link activeClass="active" to="mainPage" offset={0} spy={true}	smooth={true} duration= {500} />
          
        </OverlayTrigger>
        </ul>
        <ul>
        <OverlayTrigger key={"left"} placement={"left"} 
        overlay={<Tooltip id={`tooltip-main}`}>Projects</Tooltip>}>
          
          <Link activeClass="active" to="projectsPage" spy={true}	smooth={true} duration= {500}/>
          
        </OverlayTrigger>
        </ul>
        <ul>
        <OverlayTrigger key={"left"} placement={"left"} 
        overlay={<Tooltip id={`tooltip-main}`}>About me</Tooltip>}>
          
          <Link activeClass="active" to="MePage" offset={0} spy={true} smooth={true} duration= {500}/>
          
        </OverlayTrigger>
        </ul>
			</nav>
      <Main/>
      <Projects/>
      <Me/>
    </div>
  );
  }
}
export default App;
