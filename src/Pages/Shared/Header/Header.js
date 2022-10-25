import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logos/logo.png'
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav>
                <Navbar sticky='top' bg="light" variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} height="30" alt="" />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/events">Events</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </nav>
        </div>
    );
};

export default Header;