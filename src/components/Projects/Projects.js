import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, Table} from 'reactstrap';
import AllergiesProject from '../AllergiesProject/AllergiesProject';
import FallingProject from '../FallingProject/FallingProject';
import YelpProject from '../YelpProject/YelpProject';
import MarketingProject from '../MarketingProject/MarketingProject';

export default class Projects extends Component {

    render() {
        return (<div id='projects'>
              <Card body style={{margin:30}}>
          <CardTitle tag="h4" style={{textAlign:"center"}}>Projects</CardTitle>
          <CardText>
            <Container>
            <Row>
                <Col>
                <FallingProject/>
             </Col>
             </Row>
             <Row>
                <Col>
                <YelpProject/>
             </Col>
             </Row>
             <Row>
                <Col>
                <AllergiesProject/>
             </Col>
             </Row>
             <Row>
                <Col>
                <MarketingProject/>
             </Col>
             </Row>
            </Container>
        </CardText>
        </Card>
        </div>)
    }
}