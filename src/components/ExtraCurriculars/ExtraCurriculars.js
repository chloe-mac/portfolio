import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table} from 'reactstrap';
import ExtraCurricularsCard from '../ExtraCurricularsCard/ExtraCurricularsCard';
import IISElogo from './IISElogo.png';
import uoftenglogo from './uoftenglogo.jpg';

export default class Experience extends Component {

    render() {
        return (<div id='extracurriculars'>
              <Card body style={{margin:30}}>
          <CardTitle tag="h4" style={{textAlign:"center"}}>Extra-Curriculars</CardTitle>
          <CardText>
            <Container>
            <Row>
                <Col md='4'>
                <ExtraCurricularsCard title='Vice President' 
                where='Institute of Industrial and Systems Engineers - U of T Chapter' date='March 2019 - September 2020'
                img={IISElogo}
                description={<ul><li>Orchestrate and manage U of T’s involvement in the IISE Annual National Student Conference, including creating a video to showcase the chapter</li><li>
                Aid in the coordination of IISE - U of T Operations and communicating with other campus groups</li>
                <li>Manage the Executive and General Team Members</li></ul>}/>
                </Col>
                <Col md='4'>
                <ExtraCurricularsCard title='Director of Communications' 
                where='Institute of Industrial and Systems Engineers - U of T Chapter' date='August 2018 – February 2019'
                img={IISElogo}
                description={<ul><li>Develop an engaging and effective communication strategy to attract students and industry workers to IISE-run events</li><li>
                Draft and send newsletters to members to notify them of upcoming events including professional development workshops
                </li>
                <li>Update and maintain IISE website and social media accounts including Facebook, Instagram and Linkedin</li></ul>}/>
                </Col>
                <Col md='4'>
                <ExtraCurricularsCard title='Team Leader' 
                where='Engineering Strategies and Practices I and II' date='September 2017 – April 2018'
                img={uoftenglogo}
                description={<ul><li>Managed a team of 6 students to design a solution to early detection of wildfire in Northwestern Ontario (I) and make a client's apartment building in Quebec more energy efficient (II)</li><li>
                Coordinated individual tasks and meetings to produce project requirements, conceptual design specification
                </li></ul>}/>
                </Col>
            </Row>
            </Container>
        </CardText>
        </Card>
        </div>)
    }
}