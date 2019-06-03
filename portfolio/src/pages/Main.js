import React from 'react';
import { ReactComponent as Github} from "../assets/images/github.svg"
import { ReactComponent as Insta} from "../assets/images/instagram.svg"
import { ReactComponent as LinkedIn} from "../assets/images/linkedin_square.svg"
import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';
import {Link} from "react-scroll";
import {Grid, Cell} from 'react-mdl';

function Main() {
  return (

    <div className="mainPage" style={{width: '100%', margin: 'auto'}} >

      <Grid className="inner">
        <Cell col={12}>
          <div className="mainPageText">
        <h1>I'm Chérie Cederboom</h1>
      <p>2nd year Computer Science student</p>
        </div>
      <Cell col={12} className="mainButtons">
      <Link
				activeClass="active"
				to="projectsPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
      <Button className={"buttonMain"} >See Past Work</Button>  
      </Link>
      <Button className={"buttonSub"} href="mailto:cherie-@hotmail.nl">Get In Touch</Button>
      </Cell>
      <div  className="logosMain" >
        <Github/> 
        <Insta /> 
        <LinkedIn/></div>
      </Cell>
      </Grid>
    </div>
  );
}

export default Main;