import React from 'react';
import Head from '../assets/images/head_teal_col.png';
import { Col, Container, Row} from 'react-bootstrap';
import { ReactComponent as Insta} from "../assets/images/instagram.svg";
import { ReactComponent as LinkedIn} from "../assets/images/linkedin.svg";
import { ReactComponent as Github} from "../assets/images/github.svg";
import { ReactComponent as Code} from "../assets/images/code-solid.svg";
import { ReactComponent as Language} from "../assets/images/language-solid.svg";
import { ReactComponent as School} from "../assets/images/graduation-cap-solid.svg";
import { ReactComponent as Fav} from "../assets/images/hand-holding-heart-solid.svg";
import { ReactComponent as Strenghts} from "../assets/images/cogs-solid.svg";
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
    


<div xs={12}  fluid={true}  className="MePage" >
  <Container fluid={true} className={"innerAbout m-0  pt-5"}>
    <Row style={{marginTop:'auto', marginBottom:'auto', height: '100vh'}}>
      <Col xs={12} md={6} className={"innerAboutLeft"}>
        <Col>
          <img className='headshot pt-3 pb-0' src={Head}></img>
        </Col>
        <Col md={12} className={'aboutText'}>
          <Fade bottom>
            <h1 className='aboutHead mt-3 mb-1'>
            Hi.
            </h1>
          </Fade>
          <Fade bottom>
            <p className='aboutSub'>
              I'm Chérie Cederboom, a 19 year old Computer science student at the Rotterdam University of Applied Sciences.
              For as long as I can remember, I have always had an interest in art and tech. 
              About 2 years ago I got introduced to the world of programming.
              
              It comes as no surprise that I ended up combining these subjects by starting my journey as front-end developer.
            
            </p>
          </Fade>
        </Col>
        <Col  md={12}  className="logoBar">
          <Fade delay={800}>
            <a title={"view Github"} href="https://github.com/cherie35" target="blank">
              <Github className='logos'/>
            </a>
            <a title={"check out my Instagram"} href="https://www.instagram.com/bvsicvlly.che/" target="blank">
              <Insta className='logos'/>
            </a>
            <a title={"find me on LinkedIn"} href="https://nl.linkedin.com/in/ch%C3%A9rie-cederboom" target="blank">
              <LinkedIn className='logos'/>
            </a>
          </Fade>
        </Col>
      </Col>
      <Col xs={12} md={5} className={"innerAboutRight pb-5"}>
        <Col className={'insider py-5 '}>
          <Fade right cascade duration={1800} delay={300}>
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
              <p className={'crows'}>
                <b>2017 - Today</b>
                <br/> Computer Science Bachelor · Hogeschool Rotterdam
              
              </p>
              <p className={'crows'}>
                <b>2012 - 2017</b>
                <br/> HAVO · Libanon lyceum Rotterdam
              
              </p>
            </Col>
            <Col md={12}>
              <Strenghts className={'crowIcon'}/>
              <p className={'crows'}> GIMP · Photoshop · Lunacy · Exel</p>
            </Col>
            <Col md={12}>
              <Fav className={'crowIcon'}/>
              <p className={'crows'}>Drawing · Designing · Gaming · Cooking</p>
            </Col>
          </Fade>
        </Col>
      </Col>
    </Row>
  </Container>
</div>
    );
  }
}
  export default Me;