import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentWrapper({children}) {
    return (
        <div className="p-3 p-lg-5 mb-4 bg-light rounded-3 body_bg">
            <Container fluid="fluid">
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContentWrapper;
