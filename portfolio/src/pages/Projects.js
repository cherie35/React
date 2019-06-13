import React from 'react';
import {Container,Row, Col, Modal, Button, Carousel } from 'react-bootstrap';
import {Fade} from 'react-reveal';
class Projects extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      p1Show: false,
      p2Show: false,
      p3Show: false,
      p4Show: false,
    };
  }
  render(){
    
    let p1Close = () => this.setState({ p1Show: false });   
    let p2Close = () => this.setState({ p2Show: false });   
    let p3Close = () => this.setState({ p3Show: false });   
    let p4Close = () => this.setState({ p4Show: false });   
        
  return (
  
         


<Container fluid={true} className="projectsPage pb-1">
  <Container fluid={true} className="projectsInner">
    <Row>
      <Col xs={12} md={6} className="head px-5">
        <Fade>
          <h1 className='px-3 pr-5'>Here are some of the 
             projects I worked on
          </h1>
        </Fade>
      </Col>
      <Col xs={12} md={6} className='desc' style={{backgroundColor: '#F0C777', borderTopRightRadius: 0, borderBottomRightRadius: 0, marginTop: '4%'}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'py-5'} >
            <h1 className="projects-title">
              <a href="javascript:void(0)" onClick={() => this.setState({ p1Show: true })}>
              SAYOS
              </a>
            </h1>
            <p className='descInfo'>
            c# · asp.net
          </p>
          </Col>
        </Fade>
        <Fade delay={800}>
          <Col xs={12} className="more py-4">
            <a href="javascript:void(0)" onClick={() => this.setState({ p1Show: true })}>More</a>
          </Col>
        </Fade>
      </Col>
      <Col ></Col>
    </Row>
    <Row>
      <Col xs={12} md={7} className='desc' style={{backgroundColor: '#D8A0A3', borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
        <Fade left duration={2000}>
          <Col xs={12} className={'py-5'} >
            <Fade>
              <h1 className="projects-title pt-5">
                <a  href="javascript:void(0)" onClick={() => this.setState({ p2Show: true })}>OHR</a>
              </h1>
              <p className='descInfo'>
            java · android
          </p>
            </Fade>
          </Col>
        </Fade>
        <Fade delay={800}>
          <Col xs={12} className="more pb-4 pt-2 mt-5" style={{textAlign: 'right'}}>
            <a  href="javascript:void(0)"  onClick={() => this.setState({ p2Show: true })}>More</a>
          </Col>
        </Fade>
      </Col>
      <Col xs={12} md={4} className='desc offset-md-1' style={{backgroundColor: '#B6D4CA', borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'py-5'} >
            <Fade>
              <h1 className="projects-title pt-5">
                <a  href="javascript:void(0)" onClick={() => this.setState({ p3Show: true })}>OLE</a>
              </h1>
              <p className='descInfo'>
            logo · design
          </p>
            </Fade>
          </Col>
        </Fade>
        <Fade delay={800}>
          <Col xs={12} className="more pb-4 pt-2 mt-5">
            <a  href="javascript:void(0)" onClick={() => this.setState({ p3Show: true })}>More</a>
          </Col>
        </Fade>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={5} className='desc' style={{backgroundColor: '#C7B69F', borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
        <Fade left duration={2000}>
          <Col xs={12} className={'py-5'} >
            <Fade>
              <h1 className="projects-title">
                <a  href="javascript:void(0)" onClick={() => this.setState({ p4Show: true })}>ARCADE
                
                  <br/>SIMULATOR
              
                </a>
              </h1>
              <p className='descInfo'>
            python · pygame
          </p>
            </Fade>
          </Col>
        </Fade>
        <Fade delay={800}>
          <Col xs={12} className="more py-4" style={{textAlign: 'right'}}>
            <a  href="javascript:void(0)" onClick={() => this.setState({ p4Show: true })}>More</a>
          </Col>
        </Fade>
      </Col>
      <Col xs={12} md={6} className='desc offset-md-1' style={{backgroundColor: '#e8a87c', borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'my-5 py-5'} >
            <Col xs={12} className={'projects-title pt-3 my-5'} >
              <Fade>
                <h1 className="projects-title my-0 py-5">
                  <a href={'https://www.instagram.com/blvnk.sketches/'} target='blank'>CHECK OUT MY ART</a>
                </h1>
              </Fade>
            </Col>
          </Col>
        </Fade>
      </Col>
    </Row>
  </Container>

  {/************************** Project modals **********************/}
  <Modal size="lg" show={this.state.p1Show} onHide={p1Close} centered={true}>
  <Modal.Header closeButton style={{background: '#F0C777'}}>
    <Modal.Title id="modalP1">
      <Col xs={12} >
      <h1 className="modalTitle">Sayos</h1>
      </Col>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>dfgf</p>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" className="modalBtn">GITHUB</Button>
  </Modal.Footer>
</Modal>

<Modal size="lg" show={this.state.p2Show} onHide={p2Close} centered={true}>
  <Modal.Header closeButton style={{background: '#D8A0A3'}}>
    <Modal.Title id="modalP2">
      <h1 className="modalTitle">OHR</h1>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>dfgf</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" className="modalBtn bt2">GITHUB</Button>
  </Modal.Footer>
</Modal>

<Modal size="lg" show={this.state.p3Show} onHide={p3Close} centered={true}>
  <Modal.Header closeButton style={{background: '#B6D4CA'}}>
    <Modal.Title id="modalP3">
      <h1 className="modalTitle">OLE</h1>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>dfgf</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" className="modalBtn bt3">GITHUB</Button>
  </Modal.Footer>
</Modal>

<Modal size="lg" show={this.state.p4Show} onHide={p4Close} centered={true}>
  <Modal.Header closeButton style={{background: '#C7B69F'}}>
    <Modal.Title id="modalP4">
    <h1 className="modalTitle">Arcade Simulator</h1>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" className="modalBtn bt4">GITHUB</Button>
  </Modal.Footer>
</Modal>
</Container>

    );
  }
}
  export default Projects;