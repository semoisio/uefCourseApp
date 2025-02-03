import { Container } from "react-bootstrap";
import NavbarOwn from "../Navbar";
function History() {
  return (
    <Container className="mt-5">
        <NavbarOwn/>
      <h1>History of ISO/IEC 27001</h1>
      <p>
        ISO/IEC 27001 is an internationally recognized standard for information
        security management systems (ISMS). First published in 2005, it
        provides requirements for establishing, implementing, maintaining, and
        continually improving an ISMS.
      </p>
      <p>
        The origins of ISO/IEC 27001 can be traced back to the British Standard
        BS 7799, which was first introduced in 1995. Over time, it evolved
        through various revisions, aligning with global security practices.
      </p>
      <p>
        The standard underwent major updates in 2013 and 2022 to address
        emerging cybersecurity threats and changes in technology, ensuring its
        relevance in the modern digital era.
      </p>
    </Container>
  );
}

export default History;