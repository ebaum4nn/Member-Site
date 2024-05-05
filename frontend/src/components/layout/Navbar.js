import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <div>
            <Navbar expand="lg" className="text-light bg-dark">
            <Container fluid="fluid">
                <Navbar.Brand href="/" className='link-light'>Site Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light link-light bg-dark' id='navtoggle'>
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className='link-light'>Home</Nav.Link>
                    <Nav.Link href="/about" className='link-light'>About</Nav.Link>
                </Nav>
                <Nav className="text-end">
                    <Button href="/login" variant='outline-light' id="loginButton" className='ms-1'>Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
