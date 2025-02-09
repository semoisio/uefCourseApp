import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import NavbarOwn from "./Navbar";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";

function Implementation() {
  return (
    <>
      <Container className="mt-5 bg-light">
        <NavbarOwn />
        <Row>
          <Col className="p-0" xs={12} md={12}>
            <Image
              className="d-block d-md-none"
              src="/images/example_smaller.png"
              fluid
            />
            <Image
              className="d-block mx-auto w-100 d-none d-md-block"
              src="/images/example_smaller.png"
              fluid
            />
          </Col>
        </Row>
        <Row className="p-2">
          <Card className="text-center shadow-lg border-0 p-4">
            <Card.Body>
              <Card.Title className="text-primary display-5 fw-bold">
                Implementation of ISO/IEC 27001
              </Card.Title>
              <Row className="p-0">
                <Col md={12} className="align-content-center">
                  <Card.Text className="mt-3">
                    <p>
                      Establishing a clear objective for ISO/IEC 27001
                      certification is essential, as it anchors the
                      organization’s commitment throughout the certification
                      journey. This foresight ensures that when the process and
                      its goals are set, the organization has reasons for
                      initiating the certification. A transparent goal supports
                      efforts towards certification. Furthermore, the top
                      management’s commitment shapes the organization’s
                      information security culture. Without top managements full
                      support, strong information security culture can be
                      challenging. The information security culture is a
                      critical factor that significantly impacts the performance
                      of the ISMS and the achievement of the organization’s
                      objectives.
                    </p>
                    <p className="text-info">
                      Examples of each implementation phases below
                    </p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Accordion className="p-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Context of the organization & Leadership
              </Accordion.Header>
              <Accordion.Body>
                The company operates at a Nordic level, providing outsourced
                services through a two-sided platform that serves both clients
                and end-customers while adhering to regional regulations. To
                enhance efficiency, it has restructured its organization into
                group and local operations, established a unified management
                system, and implemented ISO/IEC 27001 certification to integrate
                and standardize its processes across all countries. After the
                company has defined its context they should proceed to
                structuring leadership structure.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Strategy</Accordion.Header>
              <Accordion.Body>
                The company aims to redefine invoicing and become the leading
                provider of invoice lifecycle services in the Nordics while
                exploring new markets in Europe. To achieve this, it focuses on
                clear strategy communication, talent development, market
                expansion, and continuous improvement of its technology and
                services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Risk and opportunities</Accordion.Header>
              <Accordion.Body>
                The company has implemented a unified risk management process,
                overseen by the Risk Management Officer, requiring regular risk
                assessments across all teams. Risks are identified, quantified,
                and documented, with mitigation strategies and contingency plans
                in place, ensuring continuous business development and prompt
                action for high-risk scenarios.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Policy</Accordion.Header>
              <Accordion.Body>
                The company's information security policy follows a risk-based
                approach, ensuring compliance with ISO/IEC 27001 and the
                protection of end-customer data, corporate operations, and legal
                responsibilities. Overseen by the CIO and the Security Council,
                the policy is reviewed annually, includes comprehensive risk
                assessments, and is supported by structured guidelines,
                sub-policies, and regular employee training.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Objectives</Accordion.Header>
              <Accordion.Body>
                The company's information security objectives align with its
                strategic direction and risk management process, ensuring the
                confidentiality, integrity, and availability of services and
                end-customer data. These objectives cover organizational,
                personnel, physical, and technological aspects, with a focus on
                risk mitigation, regulatory compliance, and preventing
                unauthorized access or security breaches.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Measurement & Targets</Accordion.Header>
              <Accordion.Body>
                Company evaluates ISMS performance through defined measurements
                and targets, ensuring continuous improvement and alignment with
                security objectives. The Security Council and CIO oversee these
                evaluations, regularly analyzing data to make informed decisions
                and promptly address nonconformities.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Communication</Accordion.Header>
              <Accordion.Body>
                Communication is essential to Ropo's ISMS, emphasizing
                transparency, trust, and timely delivery of information to
                various stakeholders. The information office team is responsible
                for managing communication related to information security,
                utilizing multiple channels to keep employees, clients, and
                other stakeholders informed and engaged.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Continual improvement</Accordion.Header>
              <Accordion.Body>
                Company ensures the continual improvement of its ISMS by
                operating a structured yearly clock, which integrates quality,
                environmental, and information security management processes
                within the organization. The system, managed through Jira,
                automates task allocation and includes a comprehensive audit
                trail to ensure all tasks are executed on schedule and can be
                validated when necessary.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Implementation;
