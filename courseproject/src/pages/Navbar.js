import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useLocation, Link } from 'react-router';



function NavbarOwn() {
  const location = useLocation(); // Get the current path from the router
  // Helper function to determine if the link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';
  //const isActive = false
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">ISO/IEC 27001</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"  className={isActive('/')}>Home</Nav.Link>
              <Nav.Link as={Link} to="/history" className={isActive('/history')}>History</Nav.Link>
              <Nav.Link as={Link} to="/requirements" className={isActive('/requirements')}>Requirements</Nav.Link>
              <Nav.Link as={Link} to="/implementation" className={isActive('/implementation')}>Implementation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarOwn;
