import React from 'react';
import { ReactComponent as Github} from "../assets/images/github.svg"
import { ReactComponent as Message} from "../assets/images/message.svg"
import { ReactComponent as Insta} from "../assets/images/instagram.svg"
import { ReactComponent as LinkedIn} from "../assets/images/linkedin.svg"
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
          <h1>Hello, I'm Chérie Cederboom</h1>
          <p>Computer Science student &nbsp; | &nbsp; Aspiring Front-end developer</p>
        </div>

      <Cell class="mdl-cell--middle mdl-layout-spacer" col={9} className="mainButtons">
      
      <Link
				activeClass="active"
				to="projectsPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
      <Button className={"buttonMain"} >
        See Past Work
        </Button>  
      </Link>
      <Button className={"buttonSub"} href="mailto:cherie-@hotmail.nl">
        <Message style={{width:'1.5rem', marginRight:'10px', paddingBottom: '5px'}}/>Get In Touch
        </Button>
      </Cell>


      <Cell col={12} className="linksMain">
      <div  className="logosMain" >
        <a href="https://github.com/cherie35"><Github/></a>
        <a href="https://www.instagram.com/bvsicvlly.che/"><Insta /> </a>
        <a href="https://nl.linkedin.com/in/ch%C3%A9rie-cederboom"><LinkedIn/></a>
      </div>
      </Cell>
      </Cell>
      </Grid>
    </div>
  );
}

export default Main;