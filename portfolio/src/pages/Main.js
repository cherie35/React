import React from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
import {Link} from "react-scroll";
import TypeOut from 'react-typeout';
import Fade from 'react-reveal/Fade';
const descr=['Computer Science Student.', 'Aspiring Front-End Developer.', 'Nerd.','Meme Appreciator.','Aspiring UI Designer.', 'Artist.'];

function Main() {
  return (

    

<Container fluid={true} className="mainPage pb-5" style={{width: '100%', margin: 'auto'}} >
  <Container fluid={true} >
    <Row >
      <Col lg={12} className="mainPageText align-middle">
        <h1 className={'mainPageTitle'}>Hello, I'm Chérie Cederboom</h1>
        <p  className={'mainPageSubTitle '} style={{marginTop: '2em'}}>
          <TypeOut words={descr} caret={true} typeSpeed={70} pauseSpeed={1500} rewindSpeed={30}/>
        </p>
      </Col>
    </Row>
    <Row >
      <Col md={12} className="offset-md-auto mainButtons pb-5">
        <Fade top>
          <div className='btn-toolbar-center'>
            <div className='btn-group pt-4 mx-5'>
              <Link activeClass="active" to="projectsPage" spy={true} smooth={true} duration= {1200}>
                <Button variant='secondary' className={"buttonMain px-4 py-2"} >
                  see past work
              </Button>
              </Link>
            </div>
            <div className='btn-group pt-4 mx-5'><Link activeClass="active" to="MePage" spy={true} smooth={true} duration= {1200}><Button variant='secondary' className={"buttonSub px-4 py-2"}>
                 About</Button>
            </Link>
            </div>
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
</Container>
  );
}

export default Main;