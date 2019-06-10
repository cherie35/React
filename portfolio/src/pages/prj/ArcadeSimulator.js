import React from 'react';
import Head from '../../assets/images/head_teal_col.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { ReactComponent as Insta} from "../../assets/images/instagram.svg";
import { ReactComponent as LinkedIn} from "../../assets/images/linkedin.svg";
import { ReactComponent as Github} from "../../assets/images/github.svg";
import { ReactComponent as CV} from "../../assets/images/file-download-solid.svg";
import Container from 'react-bootstrap/Container';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Jumbotron from 'react-bootstrap/Jumbotron';

const skills=[];
const languages=['Dutch', 'Sranangtongo', 'English'];

class ArcadeSim extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render(){
  const { open } = this.state;
    return (
    

<div fluid={true}  className="MePage" >
  
  <Container fluid={true} className="innerAbout py-5">
      <Row>      
      <Col>
        <img className='headshot pt-3 pb-0' src={Head}></img>
      </Col>
      <Col xs={12} className={'aboutText'}>
        <Fade bottom>
        <h1 className='aboutHead mt-3 mb-1'>
            Hi.
        </h1>
        </Fade>
        <Fade bottom delay={800} >
        <p className='aboutSub mx-5'>
            Mijn naam is Chérie Cederboom. Ik ben 19 jaar en studeer informatica aan de Hogeschool Rotterdam. 
          <br/>
            Hieraan voorafgaand zat ik op het Libanon lyceum in Rotterdam-Kralingen, waar ik mijn Havo diploma heb behaald.
          <br/>
            Al van jongs af aan ben ik geïnteresseerd in kunst, science, technologie en techniek. 
          
            Ik streef er naar om elke kans waarmee ik
            mijn kennis kan verbreden aan te grijpen.
        </p>
        </Fade>
      </Col>
    
      
      <Col xs={12}  className="logoBar"><Fade delay={1800}>
        <a title={"view Github"} href="https://github.com/cherie35">
          <Github className='logos'/>
        </a>
        <a title={"check out my Instagram"} href="https://www.instagram.com/bvsicvlly.che/">
          <Insta className='logos'/>
        </a>
        <a title={"find me on LinkedIn"} href="https://nl.linkedin.com/in/ch%C3%A9rie-cederboom">
          <LinkedIn className='logos'/>
        </a>
        <a title={"download resume"} href='' download>
          <CV style={{height: '30%'}} className='logos'/>
        </a></Fade>
      </Col>
      
    </Row>
  </Container>
</div>
    );
  }
}
  export default ArcadeSim;