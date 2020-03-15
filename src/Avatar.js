import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Icon } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { onClickOpenLinkInNewTab } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
};

const iconRowStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    gridColumns: '4',
    width: '100%'
};

const iconStyle = {
    color: 'white',
    fontSize: 20,
    display: 'block',
    marginRight: 'auto'
};

const textStyle = {
    color: 'gray',
    fontsize: 10,
    textAlign: 'center'
};

const icons = {
    github: 'https://github.com/ValerieWang628',
    linkedin: 'https://www.linkedin.com/in/valerieyunziwang628/',
    youtube: 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/'
};

function Avatar() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            src="https://avatars1.githubusercontent.com/u/34406500?s=150&v=4"
                            style={imageStyle}
                            roundedCircle
                        />
                        <Figure.Caption style={textStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row style={iconRowStyle}>
                {Array.from(Object.entries(icons), entry => (
                    <Col>
                        <Icon
                            type={entry[0]}
                            theme="outlined"
                            style={iconStyle}
                            onClick={onClickOpenLinkInNewTab(entry[1])}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Avatar;
