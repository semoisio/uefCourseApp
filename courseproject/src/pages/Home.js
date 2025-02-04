import './Home.css';
import NavbarOwn from "../Navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';
import Ratio from 'react-bootstrap/Ratio';


function Home() {
  return (
    <Container className="mt-5">
        <NavbarOwn/>
        <Row>
          <Col className='p-0' xs={12} md={12}>
            <Image className='d-block d-md-none' src="/images/27001_bacground.webp" fluid  />
            <Image className='d-block mx-auto w-100 d-none d-md-block' src="/images/27001_bacground.webp" fluid  />
          </Col>
      </Row>
      <Row>
        <Col className='p-0 mt-3' xs={12} md={8}>
          <p>ISO/IEC 27001 is the well-known standard which sets requirements for the organization on how to
establish an ISMS (Information Security Management System). Standard provides requirements for the
organization in 8 clauses: context of the organization, leadership, planning, support, operation,
performance evaluation, and improvement. In addition to requirements, the standard provides predefined
control list which organization must reference during the implementation process. (ISO/IEC, 2022)
Organizations want to acquire certification against ISO/IEC 27010 standard because it provides trust on
information security and creates competitive advantages over competitors (Longras et al., 2018).
Established ISMS and the trust it provides also correlates the valuation of the company if major
information security incident occurs (Ohki et al., 2009). Moreover, acquiring the certification improves
the internal processes on the organization by streamlining the processes and enhancing the
documentation (Roy, 2020). Certification process also enhances the identification risks and threat
protection as well as creates opportunities to get competitive advantages. Furthermore, ISO/IEC 27001
requires organization to clearly define management structures which leads improvement in overall
performance of the organization. All this leads to improvements in business continuity which helps to
maintain value of the company over uncertain times. (Lopes et al., 2019; Velasco et al., 2018)
</p>
        </Col>
        <Col className='p-0 mt-5' xs={12} md={4}>
          <Image  src="/images/27001_small.png" fluid  />
        </Col>
      </Row>
      <Row>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=jPA6gbsT2IQ" 
        width="100%" 
      />
      </Row>
    </Container>
  );
}

export default Home;
