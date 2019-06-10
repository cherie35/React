import React from 'react';
import {Container, Jumbotron as Jumb, Row, Col } from 'react-bootstrap';
import Dummy from '../assets/images/placeholder-image.png'; 


function Projects() {
    return (
  
      
<Container fluid={true} className="projectsPage">
  <Container fluid={true} className="projectsInner">
    <Row>
      <Col xs={6} md={6}>
        <Col className="head1 offset-md-2">
          <h1 className='projects-title'>Here are some of the 
          
            <span style={{color: '#6EAF9C'}}> projects</span> I worked on.
        
          </h1>
        </Col>
        <Jumb className='desc1'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ultrices diam nec massa congue, in malesuada sapien accumsan. 
            Phasellus placerat ut tellus ac vulputate. 
            Nullam interdum velit non tellus tincidunt dapibus sit amet et metus.</p>
        </Jumb>
        <Col className="more1">
          <a href="javascript:void(0)">More</a>    
        </Col>
      </Col>
      <Col xs={6} md={6} className="img-con-1 ">
        <img src={Dummy} className="img1 img-fluid"/>
        <h1 className="titleprj" style={{textAlign:'center'}}>Pygame</h1>
      </Col>
    </Row>
  </Container>
</Container>
    );
  }
  
  export default Projects;