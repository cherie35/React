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

      <Col md={8}className="img-con-3">
        <Col xs={12}className="titleprj-con-3">
        <h1 className="titleprj3">OHR</h1>
      </Col>
        <img src={Dummy} className="img3 img-fluid"/>
        
      </Col>
      
      
      <Col md={4} className="p3bottom">
      <Col xs={12} md={12} className='desc3-con'>
        <Jumb className='desc3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ultrices diam nec massa congue, in malesuada sapien accumsan. 
            Phasellus placerat ut tellus ac vulputate. 
            Nullam interdum velit non tellus tincidunt dapibus sit amet et metus.</p>
        </Jumb>
        <Col className="more3">
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