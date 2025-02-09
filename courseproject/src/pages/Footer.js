import React from "react";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./footer.css";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row>
          <Col md={5} className="text-center text-md-start align-content-center">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All Rights
              Reserved.
            </p>
          </Col>
          <Col md={2} className="text-center text-md-start align-content-center">
            <Image
              className="footer-image"
              src="/images/27001_small.png"
              rounded
            />
          </Col>
          <Col md={5} className="text-center text-md-end align-content-center">
            <Button
              variant="link"
              onClick={handleShow}
              aria-label="Contact details"
            >
              Contacts
            </Button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              aria-labelledby="offcanvasContactsLabel"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasContactsLabel">
                  Contact Information
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Please contact me at:{" "}
                <a href="mailto:mockup@email.fi">mockup@email.fi</a>
                <Image
                  className="pt-2"
                  src="/images/27001_small.png"
                  roundedCircle
                  fluid
                />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
