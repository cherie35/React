import React from 'react';
import { ReactComponent as Message} from "../assets/images/message.svg"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';
import {Link} from "react-scroll";
import {Grid, Cell} from 'react-mdl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Main() {
  return (

    

<Container fluid={true} className="mainPage" style={{width: '100%', margin: 'auto'}} >
  <Container fluid={true} style={{minHeight:"95vh"}} >
    <Row >
      <Col lg={12} className="mainPageText align-middle">
        <h1 className={'mainPageTitle'}>Hello, I'm Chérie Cederboom</h1>
        <p className={'mainPageSubTitle'}>Computer Science student &nbsp; | &nbsp; Aspiring Front-end developer</p>
      </Col>
    </Row>
    <Row >
      <Col md={12} className="offset-md-auto mainButtons">
        <div className='btn-toolbar-center'>
          <div className='btn-group mx-5'>
            <Link activeClass="active" to="projectsPage" spy={true} smooth={true} duration= {500}>
              <Button className={"buttonMain"} >
                  See Past Work
              </Button>
            </Link>
          </div>
          <div className='btn-group mx-5'>
            <Button className={"buttonSub"} href="mailto:cherie-@hotmail.nl">
              <Message style={{width:'1.5rem', marginRight:'10px', paddingBottom: '5px'}}/>Get In Touch

            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  <Row fluid={true}>
    <Col lg={12} className='aboutlink align-bottom'>
      <Link activeClass="active" to="MePage" spy={true} smooth={true} duration= {2000}>
        <a href='#' style={{color: '#6EAF9C'}}>get to know more about me</a>
      </Link>
    </Col>
  </Row>
</Container>
  );
}

export default Main;