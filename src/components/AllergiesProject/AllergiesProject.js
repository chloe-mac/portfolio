import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, CardHeader, CardFooter, CardSubtitle, CardBody, Badge} from 'reactstrap';
import allergypic1 from './allergypic1.png';
import allergypic2 from './allergypic2.png';

const skills1 = ['JavaScript, HTML and CSS','Java','Communicating effectively','Team Player', 'Time Management']
export default class AllergiesProject extends Component {

    render() {
        return (<div id='allergiesproject'>
              <Card body style={{margin:30}}>
              <CardHeader tag="h4" style={{backgroundColor:'#FFDDED'}}>
                  <Row>
                      <Col md='8'>
                      <h4>Dietary Restrictions Dining Expert </h4>
              <h5>Using: <u>Front-end:</u> <b>JavaScript, HTML and CSS;</b> <u>Back-end:</u> <b>Java</b></h5>
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
                <Col md={6}>
                    <Row><Col><img style={{width:200}} src={allergypic1}/></Col>
                    <Col>  <img style={{width:200}} src={allergypic2}/></Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Card style={{ borderRadius: 8, border:2 }}>
                        <CardHeader>
                        <h5>Worked on a team of 7 undergraduate engineering students to develop a full-stack web application, including database design, back-end using Java and front-end using JavaScript, HTML and CSS, to match users with dietary restrictions and restaurants who can accommodate.  This included user and restaurant account registration.</h5>

                        </CardHeader>
                        <CardBody style={{ borderRadius: 8, border:2 }}>
                        <Container>
                      <ul>
                          <li><span style={{fontWeight:600}}>Major Functionality:</span>
                              <ol>
                                  <li>
                                  Create and modify customer profiles
                                  </li>
                                  <li>
                                  Create and modify restaurant owner profiles
                                  </li>
                                  <li>
                                  Search and display matching restaurants for users
                                  </li>
                              </ol>
                          </li>
                          <li>
                          Developed Functional and Non-Functional system requirements
                          </li>
                          <li>
                          Developed <span style={{fontWeight:600}}>Unified Modeling Language (UML) Diagrams</span>: Use Case, Class, Statechart, Sequence and Activity to display how the design criteria were executed in the system
                          </li>
                      </ul>
                    </Container>
                    </CardBody>
                    </Card>
                </Col>
        </Row></Container></CardFooter>
        </Card>
        </div>)
    }
}