import './Home.css';
import NavbarOwn from "./Navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';


function Home() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Container className="mt-5 bg-light">
        <NavbarOwn/>
        <Row>
          <Col className='p-0' xs={12} md={12}>
            <Image className='d-block d-md-none' src="/images/27001_bacground.webp" fluid  />
            <Image className='d-block mx-auto w-100 d-none d-md-block' src="/images/27001_bacground.webp" fluid  />
          </Col>
      </Row>
      <Row>
        <Col className='mt-3' xs={12} md={8}>
        <Card className="text-center shadow-lg border-0 p-4">
            <Card.Body>
              <Card.Title className="display-5 fw-bold">Welcome to ISO/IEC 27001 world</Card.Title>
              <Card.Text className="text-muted mt-3">
                We are delighted to have you here! Explore our amazing features and 
                services designed to enhance your experience. Stay connected and 
                discover more.
              </Card.Text>
              <Button variant="info" className="mt-3" onClick={handleShow}>Get Started</Button>
              <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Preliminary info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        ISO/IEC 27001 is the well-known standard which sets requirements for the organization on how to
establish an ISMS. Standard provides requirements for the organization in 8 clauses: context of the organization, leadership, planning, support, operation,
performance evaluation, and improvement. In addition to requirements, the standard provides predefined
control list which organization must reference during the implementation process.
Organizations want to acquire certification against ISO/IEC 27010 standard because it provides trust on
information security and creates competitive advantages over competitors.
Established ISMS and the trust it provides also correlates the valuation of the company if major
information security incident occurs. Moreover, acquiring the certification improves
the internal processes on the organization by streamlining the processes and enhancing the
documentation. Certification process also enhances the identification risks and threat
protection as well as creates opportunities to get competitive advantages. Furthermore, ISO/IEC 27001
requires organization to clearly define management structures which leads improvement in overall
performance of the organization. All this leads to improvements in business continuity which helps to
maintain value of the company over uncertain times.

        </Offcanvas.Body>
      </Offcanvas>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-2 mt-5' xs={12} md={4}>
          <Image  src="/images/27001_small.png" fluid  />
        </Col>
      </Row>
      <Row className=' p-3'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=jPA6gbsT2IQ" 
        width="100%" 
      />
      </Row>
      
    </Container>
    <Footer/>
    </>
  );
}

export default Home;
