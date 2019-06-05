import React from 'react';
import Head from '../assets/images/head_teal.png';
import {Grid, Cell} from 'react-mdl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ReactComponent as Insta} from "../assets/images/instagram.svg"
import { ReactComponent as LinkedIn} from "../assets/images/linkedin.svg"

import { ReactComponent as Github} from "../assets/images/github.svg"

function Me() {
    return (
  
      <div className="MePage">
          <Grid>
          <Cell className="abt" col={12}>
          <img className='headshot' src={Head}></img>
          <p>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            bsf;gvbdfbvfbvdbvdhbavdhbhldvbhalvbhavb;ba<br/>
            
          </p>
          </Cell>
          <Row>
      <Col lg={12}  className="logosMain">
        <a href="https://github.com/cherie35"><Github className='logos'/></a>
        <a href="https://www.instagram.com/bvsicvlly.che/"><Insta className='logos'/> </a>
        <a href="https://nl.linkedin.com/in/ch%C3%A9rie-cederboom"><LinkedIn className='logos'/></a>
      
      </Col>
      </Row>
          </Grid>
      </div>
    );
  }
  
  export default Me;