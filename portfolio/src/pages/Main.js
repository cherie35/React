import React from 'react';
import { ReactComponent as Github} from "../assets/images/github.svg"
import { ReactComponent as Insta} from "../assets/images/instagram.svg"
import { ReactComponent as LinkedIn} from "../assets/images/linkedin_square.svg"
import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';


function Main() {
  return (

    <div className="mainPage" >
        <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  ><Particles /></div>
      
      <div className="inner"><span>
      <h1>Lorem ipsum dolor sit amet,</h1>
      <p>Computer Science student</p>
      <Button className={"buttonMain"} variant={"primary"}>See Past Work</Button>  <Button className={"buttonSub"}>Get In Touch</Button>
      <div className="logosMain" ><Github /> <Insta /> <LinkedIn/></div>
      </span>
      </div>
    </div>
  );
}

export default Main;