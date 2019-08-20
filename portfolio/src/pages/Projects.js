import React from 'react';
import {Container,Row, Col, Modal, Button, Carousel, Image } from 'react-bootstrap';
import {Fade} from 'react-reveal';
import ole13 from '../assets/images/ole/ole logo 13.jpg'
import ole16 from '../assets/images/ole/ole logo 16.jpg'
import ole18 from '../assets/images/ole/ole logo 18.jpg'
import ole20 from '../assets/images/ole/ole logo 20.jpg'
import ole24 from '../assets/images/ole/ole logo 24.jpg'
import ole25 from '../assets/images/ole/ole logo 25.jpg'
import ole31 from '../assets/images/ole/ole logo 31.jpg'
import ole33 from '../assets/images/ole/ole logo 33.jpg'
import ole34 from '../assets/images/ole/ole logo 34.jpg'
import sayos1 from '../assets/images/sayos/1.png'
import sayos2 from '../assets/images/sayos/2.png'
import sayos3 from '../assets/images/sayos/3.png'
import sayos4 from '../assets/images/sayos/4.png'
import sayos5 from '../assets/images/sayos/5.png'
import sayos6 from '../assets/images/sayos/6.png'
import sayos7 from '../assets/images/sayos/7.png'
import sayos8 from '../assets/images/sayos/8.png'
import sayos9 from '../assets/images/sayos/9.png'
import { ReactComponent as Arrow} from '../assets/images/arrow.svg'

const t1 = '#B6D4CA';
const t2 = '#ccdbd3';

class Projects extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      p1Show: false,
      p2Show: false,
      p3Show: false,
      p4Show: false,
      p5Show: false,
      p6Show: false,
    };
  }
  render(){
    
    let p1Close = () => this.setState({ p1Show: false });   
    let p2Close = () => this.setState({ p2Show: false });   
    let p3Close = () => this.setState({ p3Show: false });   
    let p4Close = () => this.setState({ p4Show: false });
    let p5Close = () => this.setState({ p5Show: false });   
        
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
      <Col xs={12} md={6} className='desc' style={{backgroundColor: t1, borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'py-5'} >
            <h1 className="projects-title pt-5">
              <a href="javascript:void(0)" onClick={() => this.setState({ p1Show: true })}>SAYOS</a>
            </h1>
            <p className='descInfo'>
            c# · asp.net
          </p>
          </Col>
        </Fade>
        <Fade delay={800}>
          <Col xs={12} className="more pb-4 pt-2 mt-5">
            <a href="javascript:void(0)" onClick={() => this.setState({ p1Show: true })}>More</a>
          </Col>
        </Fade>
      </Col>
    </Row>

    <Row>
      {/************* SAYOS *************/}  
      <Col xs={12} md={7} className='desc' style={{backgroundColor: t1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
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
      {/************* OLE *************/}  
      <Col xs={12} md={4} className='desc offset-md-1' style={{backgroundColor: t2, borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'py-5'} >
            <Fade>
              <h1 className="projects-title pt-5">
                <a  href="javascript:void(0)" onClick={() => this.setState({ p3Show: true })}>
                  OLE
                </a>
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
      {/************* ARCADE SIMULATOR *************/}  
      <Col xs={12} md={5} className='desc' style={{backgroundColor: t2, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
        <Fade left duration={2000}>
          <Col xs={12} className={'py-5'} >
            <Fade>
              <h1 className="projects-title pt-5">
                <a  href="javascript:void(0)" onClick={() => this.setState({ p4Show: true })}>
                  ARCADE
                  <br/>
                  SIMULATOR
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
      
      {/************* ART *************/}  
      <Col xs={12} md={6} className='desc offset-md-1' style={{backgroundColor: t1, borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
        <Fade right duration={2000}>
          <Col xs={12} className={'my-5 py-5'} >
            <Col xs={12} className={'pt-3 my-5'} >
              <Fade>
                <h1 className="projects-title my-0 py-5">
                  <a href={'https://www.instagram.com/blvnk.sketches/'} target='blank' >
                    CHECK OUT MY ART
                  </a>
                </h1>
              </Fade>
            </Col>
          </Col>
        </Fade>
      </Col>
    </Row>
    <Row>
      </Row>
  </Container>

  {/************************************** Project modals **************************************/}

  {/************* SAYOS *************/}  
  <Modal scrollable={true} size="lg" show={this.state.p1Show} onHide={p1Close} centered={true}>
    <Modal.Header closeButton style={{background: t1}}>
      <Modal.Title id="modalP1">
        <Col xs={12} >
          <h1 className="modalTitle">Sayos</h1>
        </Col>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      Sayos is an online formal/business fashion store. We've built this project using ASP.NET Core, Bootstrap4, CSS, HTML, JavaScript and PostgreSQL as our database medium.
        <br/>
      all layouts and designs have been made in Lunacy.
    
      </p>
      <Col className="iframe-container" md={12}>
        <iframe src="https://www.youtube.com/embed/EVDfvKYpJV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </Col>
      <div>
        <Carousel>
          <Carousel.Item>
            <Image fluid={true} src={sayos1}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos2}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos3}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos4}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos5}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos6}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos7}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos8}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos9}/>
          </Carousel.Item>
        </Carousel>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button href={"https://github.com/joelscholtz/Bytme"} target="blank" className="modalBtn bt1">GITHUB</Button>
    </Modal.Footer>
  </Modal>

  {/************* OHR *************/}  
  <Modal scrollable={true} size="lg" show={this.state.p2Show} onHide={p2Close} centered={true}>
    <Modal.Header closeButton style={{background: t1}}>
      <Modal.Title id="modalP2">
        <h1 className="modalTitle">OHR</h1>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>The OHR app is an app for teachers at the Rotterdam University of Applied Sciences. By letting their students fill out reviews on their classes, teachers will be able to get insight into the quality of lectures given by them.</p>
      <Col className="iframe-container" md={12}>
        <iframe src="https://www.youtube.com/embed/7DRb-HJEpoo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </Col>
    </Modal.Body>
    <Modal.Footer>
      <Button href={'https://github.com/cherie35/J1P4'} target="blank" variant="secondary" className="modalBtn bt1">GITHUB</Button>
    </Modal.Footer>
  </Modal>

  {/************* OLE *************/}  
  <Modal scrollable={true} size="lg" show={this.state.p3Show} onHide={p3Close} centered={true}>
    <Modal.Header closeButton style={{background: t2}}>
      <Modal.Title id="modalP3">
        <h1 className="modalTitle">OLE</h1>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      OLE (Opportunity Leadership and Experience) is a project owned by Stichting Quintiz. The project is an initiative that aids young adults in improving their leadership-, network- and social skills.
        <br/>
      </p>
      <Col md={12}>
        <Carousel>
          <Carousel.Item>
            <Image fluid={true} src={ole13}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole18}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole16}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole20}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole24}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole25}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole31}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole33}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={ole34}/>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Modal.Body>
    <Modal.Footer>
      <Button href={'https://www.openrotterdam.nl/quintis-helpt-jongeren-naar-toekomst-waarin-zij-inspireren/nieuws/item?997358'} target="blank" variant="secondary" className="modalBtn bt2">READ ARTICLE</Button>
    </Modal.Footer>
  </Modal>
  
  {/************* ARCADE SIMULATOR *************/}  
  <Modal scrollable={true} size="lg" show={this.state.p4Show} onHide={p4Close} centered={true}>
    <Modal.Header closeButton style={{background: t2}}>
      <Modal.Title id="modalP4">
        <h1 className="modalTitle">Arcade Simulator</h1>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Arcade Simulator is a pc game that consists of 4 mini games: Dodge the Fangirls, Dron, Galaxy Trespassers (my first ever programming project), and Race. It's a pygame written in entirely in Python using the Pygame library.
    </p>
      <Col className="iframe-container" md={12}>
        <iframe src="https://www.youtube.com/embed/gi3nWmsufi4" allowfullscreen/>
      </Col>
    </Modal.Body>
    <Modal.Footer>
      <Button href={'https://github.com/KaasKop97/Project-2-Game'} target="blank" variant="secondary" title='view on github' className="modalBtn bt2">FULL GAME</Button>
      <Button href={'https://github.com/KaasKop97/Project-2-Game'} target="blank" variant="secondary" title='view on github' className="modalBtn bt2">GALAXY TRESPASSERS</Button>
    </Modal.Footer>
  </Modal>

  {/************* OBIA FETI *************/}  
  <Modal> scrollable={true} size="lg" show={this.state.p5Show} onHide={p5Close} centered={true}>
    <Modal.Header closeButton style={{background: t1}}>
      <Modal.Title id="modalP6">
        <Col xs={12} >
          <h1 className="modalTitle">Obia Feti</h1>
        </Col>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      <i>Obia feti</i>
        <br/>
      All layouts and designs have been made in Lunacy.
    
      </p>
      <div>
        <Carousel>
          <Carousel.Item>
            <Image fluid={true} src={sayos1}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos2}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos3}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos4}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos5}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos6}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos7}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos8}/>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid={true} src={sayos9}/>
          </Carousel.Item>
        </Carousel>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button href={"https://github.com/joelscholtz/Bytme"} target="blank" className="modalBtn bt1">GITHUB</Button>
    </Modal.Footer>
  </Modal>
</Container>
    );
  }
}
  export default Projects;