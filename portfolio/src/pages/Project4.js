import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumb from 'react-bootstrap/Jumbotron';
import Dummy from '../assets/images/placeholder-image.png'; 

function Project3() {
    return (
  
      <div className="p3Page">
<Container fluid={true} className="projectsInner">
    <Row> 
      <Row className={'p2Top'}>
        <Col xs={5}className="img-con-2 offset-md-1">
        <img src={Dummy} className="img2 img-fluid"/>
        
      </Col>
      <Col xs={6}className="titleprj-con-2">
        <h1 className="titleprj2">OHR</h1>
      </Col>
      </Row>
      
      <Col md={12} className="p2bottom">
      <Col xs={6} md={6} className='desc2-con'>
        <Jumb className='desc2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ultrices diam nec massa congue, in malesuada sapien accumsan. 
            Phasellus placerat ut tellus ac vulputate. 
            Nullam interdum velit non tellus tincidunt dapibus sit amet et metus.</p>
        </Jumb>
        <Col className="more2">
          <a href="javascript:void(0)">More</a>
        </Col>
      </Col>
      </Col>
      
      
      
    </Row>
  </Container>

  
      </div>
    );
  }
  
  export default Project3;