import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function ItemWrapper({ children }) {
    return (
        <Container fluid="fluid">
            <Card>
                <Row className='myrow'>
                    <Col>
                        <Card.Body>{children}</Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default ItemWrapper;