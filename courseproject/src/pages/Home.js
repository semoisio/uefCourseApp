import "./Home.css";
import NavbarOwn from "./Navbar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import backgroundImage from "./images/27001_bacground.webp";
import smallImage from "./images/27001_small.png";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="mt-5 bg-light">
        <NavbarOwn />
        <Row>
          <Col className="p-0" xs={12} md={12}>
            <Image
              className="d-block d-md-none"
              src={backgroundImage}
              fluid
            />
            <Image
              className="d-block mx-auto w-100 d-none d-md-block"
              src={backgroundImage}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-2" xs={12} md={12}>
            <Card className="text-center shadow-lg border-0 p-4">
              <Card.Body>
                <Card.Title className="text-primary display-5 fw-bold">
                  Welcome to ISO/IEC 27001 world
                </Card.Title>
                <Row className="mt-4">
                  <Col md={5}>
                    <Image src={smallImage} roundedCircle fluid />
                  </Col>
                  <Col md={5} className="align-content-center">
                    <Card.Text className="mt-3">
                      We are delighted to have you here! Explore our amazing
                      features and services designed to enhance your experience.
                      Stay connected and discover more.
                    </Card.Text>
                  </Col>
                </Row>
                <Button variant="info" className="mt-5" onClick={handleShow}>
                  Get Started
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-primary">
              Preliminary info
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="card shadow p-4">
              <h1 class="text-primary">ISO/IEC 27001 Overview</h1>
              <p>
                <strong>ISO/IEC 27001</strong> is a well-known standard that
                sets requirements for organizations on how to establish an{" "}
                <strong>Information Security Management System (ISMS)</strong>.
              </p>

              <h2 class="text-secondary">Key Clauses of ISO/IEC 27001</h2>
              <p>
                The standard outlines requirements in the following eight
                clauses:
              </p>
              <ul class="list-group mb-3">
                <li class="list-group-item">Context of the organization</li>
                <li class="list-group-item">Leadership</li>
                <li class="list-group-item">Planning</li>
                <li class="list-group-item">Support</li>
                <li class="list-group-item">Operation</li>
                <li class="list-group-item">Performance evaluation</li>
                <li class="list-group-item">Improvement</li>
              </ul>

              <h2 class="text-secondary">Control List and Implementation</h2>
              <p>
                In addition to these requirements, the standard provides a
                predefined control list that organizations must reference during
                the implementation process.
              </p>

              <h2 class="text-secondary">Benefits of Certification</h2>
              <p>Organizations seek certification for several reasons:</p>
              <ul class="list-group">
                <li class="list-group-item">
                  It builds trust in information security practices.
                </li>
                <li class="list-group-item">
                  It creates a competitive advantage over competitors.
                </li>
                <li class="list-group-item">
                  It strengthens business valuation in case of a security
                  incident.
                </li>
                <li class="list-group-item">
                  It improves internal processes by streamlining workflows and
                  enhancing documentation.
                </li>
                <li class="list-group-item">
                  It enhances risk identification and threat protection.
                </li>
                <li class="list-group-item">
                  It establishes clear management structures, leading to better
                  overall performance.
                </li>
                <li class="list-group-item">
                  It supports business continuity and helps maintain company
                  value during uncertain times.
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Row className="pt-2 pb-2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jPA6gbsT2IQ"
            width="100%"
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
