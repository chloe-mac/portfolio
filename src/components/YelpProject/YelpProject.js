import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, CardHeader, CardFooter, CardSubtitle, CardBody, Badge} from 'reactstrap';
import ReactPlayer from "react-player"
import './YelpProject.css';
import websitepic from './websitepic.png';
import dropdownpic from './dropdownpic.png';
import zoominpic from './zoominpic.png';

const skills1 = ['React', 'Working with APIs', 'Self-learner','Adaptability']
export default class YelpProject extends Component {

    render() {
        return (<div id='yelpproject'>
              <Card body style={{margin:30}}>
              <CardHeader tag="h4" style={{backgroundColor:'#FFDDED'}}>
                  <Row>
                      <Col md='8'>
                      <h4>Personalized Restaurant Recommender </h4>
              <h5>Using: <b>React with Yelp API</b></h5>
              </Col>
              <Col md='1' style={{fontSize:9,padding:5,fontWeight:600}}>Skills developed:</Col>
              <Col md='3' style={{padding:0}}>
              {skills1.map((data, idx) => (
    <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:4}} key={idx} pill>{data}</Badge>))}
              </Col>
              </Row>
              </CardHeader>
        <CardFooter style={{backgroundColor:'#FFFBFD'}}><Container>
            <Row>
                <Col md={6}><Row><img className='yelpwebsitepic' src={websitepic} style={{maxWidth:500, maxHeight:208}}/></Row><br/>
                <Row>
                <img className='yelpzoominpic' src={zoominpic} style={{maxWidth:500, maxHeight:158}}/></Row></Col>
                <Col md={6}>
                    <Card style={{ borderRadius: 8, border:2 }}>
                        <CardHeader>
                        <h5>Worked individually on a guided project for a front-end web application using React and the Yelp API to search and display restaurants in a given category and location. <br/><br/> Incorporated pre-set friend’s preferences and friend’s locations for quick searching and pre-set sorting options, i.e. ‘We’re walking’ to order results by distance. </h5>

                        </CardHeader>
                        <CardBody style={{ borderRadius: 8, border:2 }}>
                        <Container>
                        <Row>
                        <img className='yelpdropdownpic' src={dropdownpic} style={{maxWidth:354, maxHeight:236}}/>
                        </Row>
                    </Container>
                    </CardBody>
                    </Card>
                </Col>
        </Row></Container></CardFooter>
        </Card>
        </div>)
    }
}