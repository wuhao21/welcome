import React, { useState } from 'react';
import LeftNav from './LeftNav';
import RightView from './RightView';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const navColStyle = {
    paddingLeft: '0px'
};

function App() {
    const [currentView, onViewChange] = useState('about');
    return (
        <Container fluid>
            <Row>
                <Col sm={2} style={navColStyle}>
                    <LeftNav onViewChange={onViewChange} />
                </Col>
                <Col sm={10}>
                    <RightView currentView={currentView} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
