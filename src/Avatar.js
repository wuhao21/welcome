import React from 'react';
import Image from 'react-bootstrap/Image';
import { Icon, Typography } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { onClickOpenLinkInNewTab } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Text } = Typography;

const collapsedRowStyle = {
    margin: '3px'
};

const imageRowStyle = {
    margin: '10px'
};

const iconRowStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    gridColumns: '4'
};

const textRowStyle = {
    margin: '10px'
};

const iconStyle = {
    color: 'white',
    fontSize: 20
};

const textStyle = {
    margin: '10px',
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

function Avatar(props) {
    return props.collapsed ? (
        <Container className="avatar">
            <Row style={collapsedRowStyle}>
                <Image
                    src="https://avatars1.githubusercontent.com/u/34406500?s=50&v=4"
                    roundedCircle
                />
            </Row>
        </Container>
    ) : (
        <Container className="avatar">
            <Row style={imageRowStyle}>
                <Image
                    src="https://avatars1.githubusercontent.com/u/34406500?s=150&v=4"
                    roundedCircle
                />
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
            <Row style={textRowStyle}>
                <Text type="secondary" style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </Row>
        </Container>
    );
}

export default Avatar;
