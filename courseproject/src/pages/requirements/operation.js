
const Operation = () => {

    return (
        <div className="card shadow p-4">
        <h2 className="text-primary">ISMS Process Overview</h2>
        <p>
          Planning the required processes alone is insufficient for a fully functioning ISMS. The organization must
          also ensure that processes required by ISO/IEC 27001 standard are both implemented and controlled in
          accordance with the requirements. The method by which the organization ensures that processes meet these
          requirements involves defining the guidelines for the processes and applying process control that aligns
          with the specified criteria.
        </p>
        
        <h3 className="text-secondary">Responsibilities of the Organization</h3>
        <ul className="list-group mb-3">
          <li className="list-group-item">Guaranteeing that processes, products, or services obtained from external sources are effectively managed and supervised.</li>
          <li className="list-group-item">Ensuring essential documented information is accessible for the processes, products, or services produced both internally and externally.</li>
          <li className="list-group-item">Effectively managing planned changes and assessing unintended changes.</li>
          <li className="list-group-item">Implementing corrective measures promptly in response to identified adverse effects.</li>
        </ul>
        
        <h3 className="text-secondary">Information Risk Assessment and Treatment</h3>
        <p>
          In the ISO/IEC 27001 standard, the organization is required to establish information risk assessment and
          information security risk treatment processes. These processes must be implemented and used regularly, either periodically or in response to significant changes. The organization must conduct these assessments in strict accordance with ISO/IEC 27001 requirements, and the results of these assessments must be documented and retained as part of the organization’s records.
        </p>
        <ul className="list-group mb-3">
          <li className="list-group-item">Developing and implementing information security risk treatment plans for each identified risk.</li>
          <li className="list-group-item">Creating a statement of applicability to maintain records of the outcomes of the risk treatment processes.</li>
        </ul>
      </div>
    );
  };
  
  export default Operation;