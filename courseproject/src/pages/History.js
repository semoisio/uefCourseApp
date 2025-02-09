import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import NavbarOwn from "./Navbar";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import HistoryText from "./historyComponents/historyText";
import historyImage from './images/history_large.png'

function History() {
  return (
    <>
    <Container className="mt-5 bg-light">
        <NavbarOwn/>
        <Row>
          <Col className="p-1" xs={12} md={12}>
            <Image
              className="d-block d-md-none"
              src={historyImage}
              fluid
            />
            <Image
              className="d-block mx-auto w-100 d-none d-md-block"
              src={historyImage}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-2" xs={12} md={12}>
            <Card className="text-center shadow-lg border-0 p-4">
              <Card.Body>
                <Card.Title className="text-primary display-5 fw-bold">
                  History
                </Card.Title>
                <Row className="mt-4">
                  <Col md={12} className="align-content-center">
                    <Card.Text className="mt-3">
                      <HistoryText/>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default History;