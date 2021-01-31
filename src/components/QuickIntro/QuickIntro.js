import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table, Jumbotron, Badge, Tooltip } from 'reactstrap';
import { FaBookOpen, FaBusinessTime, FaChess, FaAward, FaRunning, FaEnvelope, FaComments } from 'react-icons/fa';
import {Link } from 'react-scroll';
import chloephoto from './ChloeMacdonald.jpg';

const skills1 = ['Python', 'C#', 'JavaScript, HTML and CSS', 'Java']

const skills2 = ['SQL', 'React', 'Working with APIs', 'MS Excel, Word']

const skills3 = ['Matlab', 'R', 'Optimization: AMPL, Gurobi']

const softskills1 = ['Communicating effectively', 'Critical Thinker', 'Team Player']
const softskills2 = ['Self-learner', 'Time Management ', 'Adaptability']

const color = '#D7ABB6'

export default class QuickIntro extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          tooltipOpen: false
        };
      }
    
      toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }
    
    render() {
        return (<div id='introduction'>
            <Jumbotron style={{ marginBottom: 0, paddingTop: 30, paddingBottom: 30, background:'linear-gradient(180deg, rgba(255,221,237,1) 34%, rgba(255,241,248,1) 100%)'}}>
                <Container fluid>
                    <Row>
                        <Col md='1'></Col>
                        <Col md='2'>
                            <img style={{borderRadius:'50%',width:180}} src={chloephoto}></img>
                        </Col>
                        <Col md='8'>
                            <h4>Hello, I'm Chlo&eacute; Macdonald</h4>
                            <p><FaEnvelope />&nbsp;&nbsp;<a href='mailto:chlo.macdonald@mail.utoronto.ca'>chlo.macdonald@mail.utoronto.ca</a></p>
                            <p className="lead" style={{ fontSize: 18 }}>I'm entering my <span style={{fontWeight:600}}>4th year of Industrial Engineering at University of Toronto</span> with a double minor in&nbsp;
                            <Link
                                href="#fallingproject"
                                to="fallingproject"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                 <u>Artificial Intelligence Engineering</u>
                                </Link>&nbsp;and&nbsp; 
                            <Link
                                href="#marketingproject"
                                to="marketingproject"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                 <u>Engineering Business</u>
                                </Link> 
                        
                           .</p>
                            <hr style={{color:"gray"}}/>
                            <p style={{ fontSize: 14 }}>Please explore <span id="DisabledAutoHideExample"><u>this website</u></span> to learn more about me, my previous 
                            experience
                                at Scotiabank and Cisco and my work on various projects.</p>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                                <span style={{fontSize:12}}>I built this website to practice using React!</span>
                            </Tooltip>
                        </Col>
                        <Col md='1'></Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Card body style={{ margin: 30, marginTop: 10}}>
                <CardTitle tag="h4" style={{ textAlign: "center" }}>Introduction</CardTitle>
                <CardText>
                    <Container>
                        <Table hover>
                            <tbody>
                                <tr style={{ borderTop: 0 }}>
                                    <td scope="row" colSpan={1}><h5><FaBookOpen style={{color:color}}/>&nbsp;&nbsp;Languages</h5></td>
                                    <td colSpan={3}>English, French</td>
                                </tr>
                                <tr>
                                    <td scope="row" colSpan={1}><h5 ><FaChess style={{color:color}}/>&nbsp;&nbsp;Skills</h5>
                                    </td>
                                    <td colSpan={1}>
                                        <Container style={{ margin: 0 }}>
                                            <Row>
                                                <Col style={{ margin: 0 }}>
                                                    {skills1.map((data, idx) => (<div>
                                                        <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:1}}  key={idx} pill>{data}</Badge><br /></div>))}

                                                </Col>
                                                <Col>
                                                    {skills2.map((data, idx) => (<div>
                                                        <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:1}}  key={idx} pill>{data}</Badge><br /></div>))}
                                                </Col>
                                                <Col>
                                                    {skills3.map((data, idx) => (<div>
                                                        <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:1}}  key={idx} pill>{data}</Badge><br /></div>))}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>
                                    <th scope="row" colSpan={1}><h5 ><FaComments style={{color:color}}/>&nbsp;&nbsp;Soft Skills</h5></th>
                                    <td colSpan={1}>
                                        <Container style={{ margin: 0 }}>
                                            <Row>
                                                <Col style={{ margin: 0 }}>
                                                    {softskills1.map((data, idx) => (<div>
                                                        <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:1}} key={idx} pill>{data}</Badge><br /></div>))}

                                                </Col>
                                                <Col>
                                                    {softskills2.map((data, idx) => (<div>
                                                        <Badge color="info" style={{backgroundColor:'#D7ABB6',fontSize:9,padding:3,margin:1}} key={idx} pill>{data}</Badge><br /></div>))}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" colSpan={1}><h5><FaBusinessTime style={{color:color}} />&nbsp;&nbsp;Experience with</h5></th>
                                    <td colSpan={3}>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <h6>Using Full-Stack Web Development to solve client problems and provide solutions</h6>
                                                    <ul><li style={{ marginLeft: 16 }}>Extracting business requirements to determine required functionality</li>
                                                        <li style={{ marginLeft: 16 }}>Back-end: C# and front-end: HTML, JavaScript, CSS</li><li style={{ marginLeft: 16 }}>Working with and building APIs</li>
                                                    </ul>
                                                </Col><Col>
                                                    <h6>Database design and management </h6>
                                                    <ul><li style={{ marginLeft: 16 }}>Designing databases for web application scalability </li>
                                                        <li style={{ marginLeft: 16 }}>Managing relational databases with Access and Microsoft SQL Server</li>
                                                    </ul>
                                                </Col></Row>
                                        </Container>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" colSpan={1}><h5><FaAward style={{color:color}}/>&nbsp;&nbsp;Accomplishments</h5></th>
                                    <td colSpan={3}>Dean's Honor Roll, University of Toronto Entrance Scholarship, 
                                    <br/> Mentioned in Women of Influence articles for work at Cisco Systems Canada with <a target="_blank" href='https://www.womenofinfluence.ca/2019/09/22/mandys-salads-grew-from-a-counter-in-a-clothing-store-to-seven-montreal-locations-heres-how-theyre-keeping-the-growth-going/'><u>Mandy's</u></a> and <a target="_blank" href='https://www.womenofinfluence.ca/2019/11/28/how-debbie-fung-co-founder-of-yoga-tree-studios-found-success-following-her-passion/'><u>Yoga Tree</u></a>,
                                    <br /> Poem published in Urban Voices/L'echo de la ville, Painting published in Young Voices</td>
                                </tr>
                                <tr>
                                    <th scope="row" colSpan={1}><h5><FaRunning style={{color:color}} />&nbsp;&nbsp;Hobbies</h5></th>
                                    <td colSpan={3}>Cooking, running, solving problems</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </CardText>
            </Card>
        </div>)
    }
}