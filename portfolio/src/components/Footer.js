import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Boot } from "../assets/images/bootstrap-brands.svg";
import { ReactComponent as Reactcon } from "../assets/images/react-brands.svg";
import { ReactComponent as FA } from "../assets/images/font-awesome-flag-brands.svg";






class Footer extends React.Component{
    render(){
    return (
    
    <Container fluid={true} className="Footer">
  <Container fluid={true} className="">
    <Row>
    
    <FA className={'footicon'}/>
    <Boot className={'footicon'}/>
    <Reactcon className={'footicon'}/>
    </Row>
    
  </Container>
  
</Container>
    );
  }
}
  export default Footer;