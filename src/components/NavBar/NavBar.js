import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Jumbotron, Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-scroll';
import { FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';
import MyPDF from './ChloeMacdonaldResume2021.pdf';

const backgroundColor = '#FFDDED'



export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (<div style={{ position: 'fixed', zIndex: 9999, width: '100%' }}>
            <Navbar expand="md" style={{ backgroundColor: backgroundColor }}>
                <h4>Chlo&eacute; Macdonald&nbsp;&nbsp; 
                    <a href='mailto:chlo.macdonald@mail.utoronto.com'><FaEnvelope style={{color:'darkgrey'}}/></a>&nbsp;
                    <a href='https://www.linkedin.com/in/chloe-macdonald-a73036173' target="_blank" ><FaLinkedin style={{color:'#2867B2'}}/></a>
                    </h4>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <li className="nav-item">
                            <Link
                                href="#introduction"
                                to="introduction"
                                activeClass="activeTest"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <h5 style={{color:"dimgrey"}}>Introduction test</h5>
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#experience"
                                to="experience"
                                activeClass="activeTest"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <h5 style={{color:"dimgrey"}}>Experience</h5>
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#extracurriculars"
                                to="extracurriculars"
                                activeClass="activeTest"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                 <h5 style={{color:"dimgrey"}}>Extra-Curriculars</h5>
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#projects"
                                to="projects"
                                activeClass="activeTest"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                              
                            >
                                 <h5 style={{color:"dimgrey"}}>Projects</h5>
              </Link>
                        </li>
                    </Nav>
                    <NavbarText><a href={MyPDF} download='ChloeMacdonaldResume2021.pdf'><h5><FaDownload/>&nbsp;&nbsp;Download Resume</h5></a></NavbarText>
                </Collapse>
            </Navbar>
        </div>);
    }
}