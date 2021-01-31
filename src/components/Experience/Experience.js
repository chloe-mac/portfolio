import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, Badge} from 'reactstrap';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ciscologo from './ciscologo.png';
import franceflag from './franceflag.png';
import hypeapplogo from './hypeapplogo.png';
import javalogo from './javalogo.png';
import scotialogo from './scotialogo.jpg';

const color = '#D7ABB6'

export default class Experience extends Component {

    render() {
        return (<div id='experience' style={{fontSize:10}}>
              <Card body style={{margin:30}}>
          <CardTitle tag="h4" style={{textAlign:"center"}}>Experience</CardTitle>
          <CardText>
            <Container>
            <Row>
            <Col md='4'>
             <ExperienceCard name='Scotiabank' timeline='May 2020 - Present' title='Trade Floor Technology Web Developer' img={scotialogo} roleDescription='A full-stack Web Developer on the Global Banking &amp; Markets Technology team, responsible for determining business requirements to design scalable applications using back-end: C# and front-end: JavaScript with JQuery, HTML, and CSS.'/>
            
             </Col>
             <Col md='8'>
              
             <ul style={{padding:5}}>
                 <li style={{padding:2}}>Built a full-stack Real Estate Project Tracker web application to provide a collaborative platform for team members to update their deliverable progress and status updates
                 <ul style={{paddingLeft:10,paddingTop:2}}>
                         <li>Features include: authentication, email updates and reminders, budget tracking with currency conversion API</li>
                     </ul>
                 </li>
                 <li style={{padding:2}}>Built a full-stack configurable Team Schedule web application to track work locations, shift times and daily tasks for team members
                     <ul style={{paddingLeft:10,paddingTop:2}}>
                         <li>Back-end algorithms implemented to smartly predict schedules based on previous weeks Team Schedule data</li>
                     </ul>
                 </li>
                 <li style={{padding:2}}>Developed an automated attendance tracking process from daily security logs to determine users working in person for Covid-19 contact tracing purposes</li>
                 <li style={{padding:2}}>Wrote front-end and back-end scripts to augment existing web applications</li>
                 <li style={{padding:2}}>Responsible for database design and management for scalability</li>
                 <li style={{padding:2}}>Worked directly with end-users to maintain web applications</li>
                 </ul>
             </Col>
             </Row>
             <br/>
             <Row>
             <Col md='4'>
             <ExperienceCard name='Cisco Systems Canada' timeline='May 2019 - August 2019' title='Technical Sales Engineer' img={ciscologo} roleDescription='A technical lead for identifying and implementing improvements to everyday business systems for two female-owned SMBs.'/>
            
             </Col>
             <Col md='8'>
              
                <ul style={{padding:5}}>
                    
                <li style={{padding:2}}>
                    Built an automated customer feedback system to generate monthly service quality reports based on email data using JavaScript
                    </li>
                    <li style={{padding:2}}>
                    Built an internal web app that calls the Google My Business API to display monthly reviews for various locations using 
 
                    JavaScript, HTML, and CSS
                    </li>
                    <li style={{padding:2}}>Conducted usability testing for web and mobile applications</li>
                    <li style={{padding:2}}>
                    Provided consulting on current market AI chatbot vendors
                    </li>
                    <li style={{padding:2}}>
                    Researched and prepared a data retention and cybersecurity policy proposal
                    </li>
                </ul>
             </Col>
             </Row><br/>
             <hr></hr>
             <br/>
             <Row>
             <Col md='4'>
             <ExperienceCard name='Hype App Development' timeline='November 2018 - February 2019' title='Design Intern' img={hypeapplogo} roleDescription='Responsible for creating functional specifications for user modules for an IOS app'/>
             </Col>
           
                 <Col md='4'>
                    <ExperienceCard name='Coding Professional Development for Students' timeline='November 2018 - December 2018' title='Director of Operations &amp; Communications' img={javalogo} roleDescription='Responsible for marketing, communications and operations for a 2-day workshop aimed at university students to learn how to code in Java' />
                 </Col>
        
                 <Col md='4'>
                    <ExperienceCard timeline='January 2015 - June 2017' title='French Tutor' img={franceflag} roleDescription="Responsible for creating activities to help improve a French Immersion's student reading and writing abilities, aided in completion of homework and other projects" />
                 </Col>
               
             </Row>
            </Container>
        </CardText>
        </Card>
        </div>)
    }
}