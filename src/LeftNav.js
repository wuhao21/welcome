import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Avatar from './Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';

const navBarStyle = {
    flexDirection: 'column',
    width: '100%',
    minHeight: '1000px',
    textAlign: 'center'
};

function LeftNav(props) {
    function onSwitchToAboutView() {
        props.onViewChange('about');
    }
    function onSwitchToGameProjectsView() {
        props.onViewChange('projects');
    }
    function onSwitchToModelingView() {
        props.onViewChange('modeling');
    }
    function onSwitchToArtView() {
        props.onViewChange('art');
    }
    return (
        <Navbar bg="dark" variant="dark" style={navBarStyle}>
            <Nav style={navBarStyle}>
                <Nav.Item>
                    <Avatar />
                </Nav.Item>
                <Nav.Link onSelect={props.onViewChange} eventKey="about">
                    About
                </Nav.Link>
                <Nav.Link onSelect={props.onViewChange} eventKey="projects">
                    Game Projects
                </Nav.Link>
                <Nav.Link onSelect={props.onViewChange} eventKey="modeling">
                    3D Modeling
                </Nav.Link>
                <Nav.Link onSelect={props.onViewChange} eventKey="art">
                    Homemade Art
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default LeftNav;
