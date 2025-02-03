import { Container } from "react-bootstrap";
import NavbarOwn from "../Navbar";
function Requirements() {
  return (
    <Container className="mt-5">
        <NavbarOwn></NavbarOwn>
      <h1>ISO/IEC 27001 Requirements</h1>
      <p>
        ISO/IEC 27001 outlines the requirements for establishing, implementing,
        maintaining, and continually improving an information security management
        system (ISMS). Organizations must address these requirements to achieve
        certification.
      </p>
      <h2>Key Requirements</h2>
      <ul>
        <li>
          <strong>Context of the Organization:</strong> Understanding internal and
          external issues affecting the ISMS.
        </li>
        <li>
          <strong>Leadership:</strong> Commitment from top management to support and
          promote information security initiatives.
        </li>
        <li>
          <strong>Planning:</strong> Identifying risks and opportunities and establishing
          objectives for ISMS implementation.
        </li>
        <li>
          <strong>Support:</strong> Providing necessary resources, training, and
          awareness programs.
        </li>
        <li>
          <strong>Operation:</strong> Implementing and maintaining security controls
          and policies.
        </li>
        <li>
          <strong>Performance Evaluation:</strong> Monitoring, measuring, analyzing,
          and evaluating the effectiveness of the ISMS.
        </li>
        <li>
          <strong>Improvement:</strong> Continual improvement through corrective and
          preventive actions.
        </li>
      </ul>
    </Container>
  );
}

export default Requirements;
