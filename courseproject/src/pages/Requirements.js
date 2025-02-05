import NavbarOwn from "./Navbar";
import Footer from './Footer';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';


function Requirements() {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Container className="mt-5">
        <NavbarOwn/>
        <Row>
          <Col className='p-0' xs={12} md={12}>
            <Image className='d-block d-md-none' src="/images/Requirements_large.png" fluid  />
            <Image className='d-block mx-auto w-100 d-none d-md-block' src="/images/Requirements_large.png" fluid  />
          </Col>
      </Row>
      <Row>
      <Carousel className="p-2">
      <Carousel.Item>
        <Image src="/images/caroussel_Placeholder_grey.png" fluid  />
        <Carousel.Caption>
          <h3>4. Context of the organization</h3>
          <Button variant="info" onClick={handleShow}>
            More
        </Button>
        </Carousel.Caption>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contacts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Please contact me mockup@email.fi
        </Offcanvas.Body>
      </Offcanvas>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/images/caroussel_Placeholder_grey.png" fluid  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/images/caroussel_Placeholder_grey.png" fluid  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>
      
    </Container>
    <Footer/>
    </>
  );
}

export default Requirements;
