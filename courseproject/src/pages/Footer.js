import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          <Button variant="link" onClick={handleShow}>
            Contacts
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contacts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Please contact me mockup@email.fi
        </Offcanvas.Body>
      </Offcanvas>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
