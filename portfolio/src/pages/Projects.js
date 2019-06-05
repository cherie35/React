import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Placeholder from '../assets/images/placeholder-image.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
    return (
  
      
<div className="projectsPage">
  <Container fluid={true} className='projectsPage'>
    <Col sm={2}>
      <Row className='flex'>
        <h1 className='projects-title'>Here are some of the 
          <span style={{color: '#6EAF9C'}}> things</span> I worked on.
        </h1>
      </Row>
    </Col>
  </Container>
</div>
    );
  }
  
  export default Projects;