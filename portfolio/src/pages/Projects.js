import React from 'react';
import {Container,Row, Col, Modal } from 'react-bootstrap';


class Projects extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render(){
    return (
  
      
<Container fluid={true} className="projectsPage pb-1">
  <Container fluid={true} className="projectsInner">
    <Row>
        <Col xs={12} md={6} className="head px-5">
          <h1 className='px-3 pr-5'>Here are some of the 
             projects I worked on
          </h1>
        </Col>
        <Col xs={12} md={6} className='desc' style={{backgroundColor: '#F0C777', borderTopRightRadius: 0, borderBottomRightRadius: 0, marginTop: '4%'}}>
          <Col xs={12} className={'py-5'} >
            <h1 className="projects-title"><a  href="javascript:void(0)">SAYOS</a></h1>
            <p className='descInfo'>
            c# · asp.net
          </p>
          </Col>
          <Col xs={12} className="more py-4">
            <a  href="javascript:void(0)">More</a>    
          </Col>
        </Col>
        <Col >
      </Col>
    </Row>
    <Row>
    <Col xs={12} md={7} className='desc' style={{backgroundColor: '#D8A0A3', borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
          <Col xs={12} className={'py-5'} >

            <h1 className="projects-title pt-5"><a  href="javascript:void(0)">OHR</a></h1>
            <p className='descInfo'>
            java · android
          </p>
          </Col>
          <Col xs={12} className="more pb-4 pt-2 mt-5" style={{textAlign: 'right'}}>
            <a  href="javascript:void(0)">More</a>    
          </Col>
            
        </Col>
    <Col xs={12} md={4} className='desc offset-md-1' style={{backgroundColor: '#B6D4CA', borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
          <Col xs={12} className={'py-5'} >

            <h1 className="projects-title pt-5"><a  href="javascript:void(0)">OLE</a></h1>
            <p className='descInfo'>
            logo · design
          </p>
          </Col>
          <Col xs={12} className="more pb-4 pt-2 mt-5">
            <a  href="javascript:void(0)">More</a>    
          </Col>
            
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={5} className='desc' style={{backgroundColor: '#C7B69F', borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
          <Col xs={12} className={'py-5'} >

            <h1 className="projects-title"><a  href="javascript:void(0)">ARCADE<br/>SIMULATOR</a></h1>
            <p className='descInfo'>
            python · pygame
          </p>
          </Col>
          <Col xs={12} className="more py-4" style={{textAlign: 'right'}}>
            <a  href="javascript:void(0)">More</a>    
          </Col>
        </Col>
        <Col xs={12} md={6} className='desc offset-md-1' style={{backgroundColor: '#e8a87c', borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
          <Col xs={12} className={'my-5 py-5'} >
          <Col xs={12} className={'projects-title pt-3 my-5'} >
            
             <h1 className="projects-title my-0 py-5"><a href={'https://www.instagram.com/blvnk.sketches/'} target='blank'>CHECK OUT MY ART</a></h1>
            
          </Col>
          </Col>
        </Col>   
        
    </Row>
  </Container>
</Container>

    );
  }
}
  export default Projects;