import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png'
const Header = () => {
    return (
        <div>
            <nav>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} height="30" alt="" />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                {/* <Link to='/services'>Services</Link> */}
            </nav>
        </div>
    );
};

export default Header;