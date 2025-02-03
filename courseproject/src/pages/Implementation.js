import { Container } from "react-bootstrap";
import NavbarOwn from "../Navbar";
function Implementation() {
  return (
    <Container className="mt-5">
        <NavbarOwn/>
      <h1>ISO/IEC 27001 Implementation</h1>
      <p>
        Implementing ISO/IEC 27001 requires a structured approach to establish an
        effective Information Security Management System (ISMS). Below are key
        steps for a successful implementation.
      </p>
      <h2>Steps for Implementation</h2>
      <ol>
        <li>
          <strong>Define the Scope:</strong> Determine the boundaries and applicability
          of the ISMS within your organization.
        </li>
        <li>
          <strong>Perform Risk Assessment:</strong> Identify and evaluate security
          risks and define risk treatment plans.
        </li>
        <li>
          <strong>Develop Security Policies:</strong> Establish policies, procedures,
          and controls in alignment with ISO/IEC 27001 requirements.
        </li>
        <li>
          <strong>Implement Security Controls:</strong> Apply the necessary technical
          and organizational measures to mitigate risks.
        </li>
        <li>
          <strong>Employee Training & Awareness:</strong> Educate staff on security
          best practices and policies.
        </li>
        <li>
          <strong>Monitor & Measure:</strong> Continuously assess the effectiveness of
          security measures through audits and evaluations.
        </li>
        <li>
          <strong>Continuous Improvement:</strong> Update security policies and
          controls as threats evolve and based on audit results.
        </li>
      </ol>
    </Container>
  );
}

export default Implementation;
