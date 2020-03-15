import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function RightView(props) {
    switch (props.currentView) {
        case 'about':
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://cdn.gamer-network.net/2019/articles/2019-11-27-15-36/pokemon-sword-and-shield-unveils-gigantamax-snorlax-1574869007864.jpg/EG11/thumbnail/1920x1078/format/jpg/quality/80"
                    />
                    <Card.Body>
                        <Card.Title>home</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            );
        case 'projects':
            return (
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            );
        default:
            return null;
    }
}

export default RightView;
