import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {signOut} from 'firebase/auth';
const Header = () => {
    const [user] =useAuthState(auth);

    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">MOHU'S PHOTOGRAPHY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            { user ?
                            <button onClick={handleSignOut}>Sign Out</button> :

                            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
        
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;