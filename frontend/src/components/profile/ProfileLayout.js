import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProfileLayout({ children }) {
    return (
        <Container fluid="fluid">
            <Row>
                <Col>{children}</Col>
            </Row>
        </Container>
    );
}

export default ProfileLayout;