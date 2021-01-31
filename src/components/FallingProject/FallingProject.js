import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, CardHeader, CardFooter, CardSubtitle, CardBody, Badge} from 'reactstrap';
import ReactPlayer from "react-player"

const skills1 = ['Python', 'Communicating effectively', 'Critical Thinker','Team Player']

export default class FallingProject extends Component {

    render() {
        return (<div id='fallingproject'>
              <Card body style={{margin:30}}>
              <CardHeader tag="h4" style={{backgroundColor:'#FFDDED'}}>
                  <Row>
                      <Col md='8'>
                  <h4>Machine Learning Model: Falling People Detection</h4>
              <h5>Using: <b>Python with Pytorch</b></h5>
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
                <Col md={6}><ReactPlayer
        url="https://www.youtube.com/watch?v=w5yLunSJiRk"
        controls='true' width='400px' height='250px'/></Col>
                <Col md={6}>
                    <Card style={{ borderRadius: 8, border:2 }}>
                        <CardHeader>
                        <h5>Worked on a team of 4 undergraduate engineering students to collect data and develop a machine learning model to detect when a person in an indoor environment has fallen from a color image.  
                            <br/><br/>The goal of this model was to allow healthcare workers to be notified when a fall occurs for quicker intervention and to prevent undetected injuries, due to falls being the leading cause of injury-related hospitalizations among seniors.  </h5>

                        </CardHeader>
                        <CardBody style={{ borderRadius: 8, border:2 }}>
                        <Container>
                        <p>

                    <ol>
                        <li><span style={{fontWeight:600}}>Data Processing:</span> Collected and classified ~10000 samples to train, validate and test the model</li>
                        <li><span style={{fontWeight:600}}>Architecture: </span>Binary Classification AlexNet convolutional neural network</li>
                        <li><span style={{fontWeight:600}}>Evaluation:</span> Evaluated model quantitatively using confusion matrix and qualitatively to determine strengths and weaknesses of the model, i.e. model performed best with brightly lit images</li>
                        <li><span style={{fontWeight:600}}>Ethical Considerations:</span> Concerns of over reliance and race, age and gender bias of the model were discussed </li>
                    </ol>
                    </p>
                    </Container>
                    </CardBody>
                    </Card>
                </Col>
        </Row></Container></CardFooter>
        </Card>
        </div>)
    }
}