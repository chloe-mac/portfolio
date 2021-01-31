import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, CardHeader, CardFooter, CardSubtitle, CardBody, Badge} from 'reactstrap';
import ReactPlayer from "react-player"
import marketingpic from './MarketingReport.png';

const skills1 = ['Communicating effectively','Teamwork','Time Management','Adaptability']
export default class MarketingProject extends Component {

    render() {
        return (<div id='marketingproject'>
              <Card body style={{margin:30}}>
              <CardHeader tag="h4" style={{backgroundColor:'#FFDDED'}}>
                  <Row>
                      <Col md='8'>
                      <h4>Marketing Plan for Maven, a professional workwear apparel line</h4>
              <h5>Using: <b>Marketing Principles and Strategies</b></h5>
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
                
                    <Card style={{ borderRadius: 8, border:2 }}>
                        <CardHeader>
                        <h5>Worked on a team of 4 undergraduate engineering students to develop a marketing plan proposal for a fictional professional workwear apparel line, Maven, for the Canadian women’s fashion retailer, Aritzia.  This proposal included an in depth situational analysis of the industry, marketing segmentation, targeting and positioning, and a final marketing strategy with a timeline for launch.  This project culminated in a marketing plan and strategy presentation including an elevator pitch. </h5>

                        </CardHeader>
                        <CardBody style={{ borderRadius: 8, border:2 }}>
                        <Container style={{paddingLeft:'20%',paddingRight:'20%'}}>
                        <img src={marketingpic} style={{width:600}}/>
                    </Container>
                    </CardBody>
                    </Card>

        </Row></Container></CardFooter>
        </Card>
        </div>)
    }
}