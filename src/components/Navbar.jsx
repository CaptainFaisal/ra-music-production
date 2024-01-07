import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarCustom = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className="text-white">
                    <img 
                        className="d-inline-block align-top" 
                        src="src\assets\favicon.jpg" 
                        alt="Logo" 
                        height="30"
                    />{' '}
                    RA music production
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Link 1</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Link 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCustom;