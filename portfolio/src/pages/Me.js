import React from 'react';
import Head from '../assets/images/head_teal_col.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ReactComponent as Insta} from "../assets/images/instagram.svg";
import { ReactComponent as LinkedIn} from "../assets/images/linkedin.svg";
import { ReactComponent as Github} from "../assets/images/github.svg";
import { ReactComponent as Code} from "../assets/images/code-solid.svg";
import { ReactComponent as Language} from "../assets/images/language-solid.svg";
import { ReactComponent as School} from "../assets/images/graduation-cap-solid.svg";
import { ReactComponent as Fav} from "../assets/images/hand-holding-heart-solid.svg";
import { ReactComponent as Strenghts} from "../assets/images/cogs-solid.svg";
import { ReactComponent as CV} from "../assets/images/file-download-solid.svg";
import Container from 'react-bootstrap/Container';
import Pdf from '../assets/documents/CV 2018.pdf';
import Fade from 'react-reveal/Fade';



class Me extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render(){
    return (
    

<Col xs={12}  fluid={true}  className="MePage" >
  
  <Container fluid={true} className={"innerAbout m-0  py-5"}>
      <Row style={{marginTop:'auto', marginBottom:'auto'}}> 
        <Col xs={12} md={7} className={"innerAboutLeft"}> 
      <Col>
        <img className='headshot pt-3 pb-0' src={Head}></img>
      </Col>
      <Col md={12} className={'aboutText'}>
        <Fade bottom>
        <h1 className='aboutHead mt-3 mb-1'>
            Hi.
        </h1>
        </Fade>
        <Fade bottom delay={800} >
        <p className='aboutSub '>
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
    
      
      <Col  md={12}  className="logoBar"><Fade delay={1800}>
        <a title={"view Github"} href="https://github.com/cherie35">
          <Github className='logos'/>
        </a>
        <a title={"check out my Instagram"} href="https://www.instagram.com/bvsicvlly.che/">
          <Insta className='logos'/>
        </a>
        <a title={"find me on LinkedIn"} href="https://nl.linkedin.com/in/ch%C3%A9rie-cederboom">
          <LinkedIn className='logos'/>
        </a>
        {/*<a title={"download resume"} href={Pdf} download>
          <CV style={{height: '30%'}} className='logos'/>
    </a>*/}</Fade>
      </Col>
      </Col> 

      <Col xs={12} md={5} className={"innerAboutRight pb-5"}>
        <Col className={'insider py-5 '}>
        <Fade right cascade duration={2000} delay={1800}>
        <Col md={12} className={'crowBar'}>
          <Code className={'crowIcon'}/>
        <p className={'crows'}>C# · Python · Java  · CSS · HTML · SQL · JS </p>
        </Col>
        <Col md={12}>
          <Language className={'crowIcon'}/>
        <p className={'crows'}>Dutch · Sranantongo · English</p>
        </Col>
        <Col md={12}>
          <School className={'crowIcon'}/>
        <p className={'crows'}><b>2017 - Today</b><br/> Computer Science Bachelor · Hogeschool Rotterdam</p>
        <p className={'crows'}><b>2012 - 2017</b> <br/> HAVO · Libanon lyceum Rotterdam</p>
        </Col>
        <Col md={12}>
          <Strenghts className={'crowIcon'}/>
        <p className={'crows'}> GIMP · Photoshop · Lunacy · Exel</p>
        </Col>
        <Col md={12}>
          <Fav className={'crowIcon'}/>
        <p className={'crows'}>Drawing · Designing · Gaming · Cooking</p>
        </Col></Fade>
        </Col>   
        </Col>
    </Row>
  </Container>
  
</Col>
    );
  }
}
  export default Me;