import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, Button, CardTitle, CardText, CardBody, CardSubtitle, Table } from 'reactstrap';
import './ExtraCurricularsCard.css';

export default class ExtraCurricularsCard extends Component {

    render() {
        return (
            <div>
                <Card style={{borderColor:'#D7ABB6', backgroundColor:'#FFFBFD'}}>
                    <CardBody style={{paddingBottom:0}}>
                        <Container>
                            <Row>
                                <Col md='8'>
                                    <CardTitle tag="h5">{this.props.title}</CardTitle>
                                    <CardTitle tag="h6" className="mb-2 text-muted"><b>{this.props.where}</b></CardTitle>
                                    <CardTitle tag="h6" className="mb-2 text-muted">{this.props.date}</CardTitle>
                                </Col>
                                <Col md='4'>
                                    <img src={this.props.img} className='imgExtra'></img>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                    <CardBody  style={{paddingTop:0}}>
                    <Container>
                    <hr className="my-2" />
                        <CardText>{this.props.description}</CardText>
                    </Container>
                    </CardBody>
                </Card>
            </div>);
    }
}