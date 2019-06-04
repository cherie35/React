import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Placeholder from '../assets/images/placeholder-image.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
  
      <div className="projectsPage">

      <Grid className='cont'>
      <Cell col={12}>
      <h1 className='PageDesc'>projects</h1>

      </Cell>
      <Cell col={6} className="halfRight"></Cell>
      <Cell col={6} className='colLeft'></Cell>
      <Cell col={4}>
        <Card >
          <Card.Img src={Placeholder}/>
          <Card.Body>
            <Card.Title>Title</Card.Title>
          </Card.Body>
          <Card.Body>
          </Card.Body>
        </Card>
        </Cell>
        <Cell col={4}>
        <Card >
          <Card.Img src={Placeholder}/>
          <Card.Body>
            <Card.Title>Title</Card.Title>
          </Card.Body>
          <Card.Body>
          </Card.Body>
        </Card>
        </Cell>
        <Cell col={4}>
        <Card>
          <Card.Img src={Placeholder}/>
          <Card.Body>
            <Card.Title>Title</Card.Title>

          </Card.Body>
          <Card.Body>

          </Card.Body>
        </Card>
      </Cell>
      </Grid>

      

      </div>
    );
  }
  
  export default Projects;