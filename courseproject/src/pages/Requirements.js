import NavbarOwn from "./Navbar";
import Footer from "./Footer";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import "./Requirements.css";
import ContextOfTheOrganization from "./requirements/contextOfTheOrganization";
import Leadership from "./requirements/Leadership";
import Planning from "./requirements/planning";
import Support from "./requirements/support";
import Operation from "./requirements/operation";
import PerformanceEvaluation from "./requirements/performanceEvaluation";
import Improvement from "./requirements/improvements";
import carousselPlaceHolder from './images/caroussel_Placeholder_grey.png'
import requirementsImage from './images/Requirements_large.png'

function Requirements() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  return (
    <>
      <Container className="mt-5 bg-light">
        <NavbarOwn />
        <Row>
          <Col className="p-0" xs={12} md={12}>
            <Image
              className="d-block d-md-none"
              src={requirementsImage}
              fluid
            />
            <Image
              className="d-block mx-auto w-100 d-none d-md-block"
              src={requirementsImage}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Carousel className="p-2 align-content-center" data-bs-theme="dark">
            {/* Firt slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">
                  4. Context of the organization
                </h3>
                <p className="custom-text">
                  ISO/IEC 27001 begins with the organization's need to
                  understand itself and its operational context.
                </p>
                <Button variant="info" onClick={handleShow1}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show1} onHide={handleClose1}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title class="text-primary">
                    Context of the organization
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ContextOfTheOrganization />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Second slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">5. Leadership</h3>
                <p className="custom-text">
                  Commitment from top management is a fundamental pillar of an
                  established ISMS according to ISO/IEC 27001.
                </p>
                <Button variant="info" onClick={handleShow2}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show2} onHide={handleClose2}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Leadership
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Leadership />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Third slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">6. Planning</h3>
                <p className="custom-text">
                  Establishing an ISMS involves assessing and managing
                  information security risks and opportunities.
                </p>
                <Button variant="info" onClick={handleShow3}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show3} onHide={handleClose3}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Planning
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Planning />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Fourth slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">7. Support</h3>
                <p className="custom-text">
                  ISMS requires supporting functions and documentation to ensure
                  its effectiveness.
                </p>
                <Button variant="info" onClick={handleShow4}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show4} onHide={handleClose4}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Planning
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Support />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Fifth slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">8. Operation</h3>
                <p className="custom-text">
                  Planning the required processes alone is insufficient for a
                  fully functioning ISMS. The organization must also ensure that
                  processes required by ISO/IEC 27001 standard are both
                  implemented and controlled in accordance with the
                  requirements.
                </p>
                <Button variant="info" onClick={handleShow5}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show5} onHide={handleClose5}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Operation
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Operation />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Sixht slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">
                  9. Performance evaluation
                </h3>
                <p className="custom-text">
                  The organization must identify the information security
                  objectives, processes, and controls that require monitoring
                  and measurement.
                </p>
                <Button variant="info" onClick={handleShow6}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show6} onHide={handleClose6}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Operation
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <PerformanceEvaluation />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
            {/* Seventh slide*/}
            <Carousel.Item>
              <Image
                className="custom-img"
                src={carousselPlaceHolder}
                fluid
              />
              <Carousel.Caption>
                <h3 className="text-primary custom-header">10. Improvement</h3>
                <p className="custom-text">
                  An integral part of the ISMS is the commitment to continually
                  improve the ISMS.
                </p>
                <Button variant="info" onClick={handleShow7}>
                  More
                </Button>
              </Carousel.Caption>
              <Offcanvas show={show7} onHide={handleClose7}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-primary">
                    Operation
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Improvement />
                </Offcanvas.Body>
              </Offcanvas>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Requirements;
