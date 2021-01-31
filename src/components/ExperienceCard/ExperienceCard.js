import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, Button, CardTitle, CardText, Table } from 'reactstrap';
import './ExperienceCard.css';

export default class ExperienceCard extends Component {

    render() {
        
        return (
            <div>
                <Card style={{borderColor:'#D7ABB6',borderWidth:1, backgroundColor:'#FFFBFD'}}>
                <CardHeader>
                    <h4>{this.props.title}</h4>
                    <p style={{ marginTop: 2 }}>{this.props.timeline}</p>
                    <h5><img className='imgCompany' src={this.props.img} alt=''></img>&nbsp;&nbsp;{this.props.name}</h5>
                    <h6 style={{marginTop:8}}>{this.props.roleDescription}</h6>
                </CardHeader>
                </Card>

            </div>);
    }
}