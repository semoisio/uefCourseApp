import React from 'react';

const PerformanceEvaluation = () => {

    return (
        <div className="card shadow p-4">
      <h2 className="text-primary">Monitoring and Measurement of ISMS</h2>
      <p>
        The organization must identify the information security objectives, processes, and controls that require
        monitoring and measurement. In addition, the organization should establish systematic methodologies for
        monitoring, measuring, analyzing, and evaluating the ISMS. It is crucial to ensure that these chosen
        methodologies not only provide valid results but also maintain comparability and reproducibility.
      </p>
      
      <h3 className="text-secondary">Roles and Responsibilities for Monitoring and Measurement</h3>
      <ul className="list-group mb-3">
        <li className="list-group-item">Establishing a well-defined schedule for the systematic execution of monitoring and measurement activities.</li>
        <li className="list-group-item">Including clearly defined roles and responsibilities for individuals or entities responsible for execution.</li>
        <li className="list-group-item">Determining specific intervals for analysis and evaluation of the measurements.</li>
        <li className="list-group-item">Maintaining documents as evidence of monitoring, measurement, and analysis activities.</li>
      </ul>

      <h3 className="text-secondary">Internal Audits for ISMS</h3>
      <p>
        A method to ensure that the ISMS functions as intended is to conduct internal audits. The organization is
        required to conduct periodic internal audits to evaluate the ISMS in two critical aspects:
      </p>
      <ul className="list-group mb-3">
        <li className="list-group-item">Assessing whether the ISMS aligns with the organization’s information security management requirements and ISO/IEC 27001 standard.</li>
        <li className="list-group-item">Determining whether the ISMS has been effectively implemented and is properly maintained.</li>
      </ul>

      <h3 className="text-secondary">Internal Audit Program</h3>
      <p>
        The organization must establish an internal audit program, which must include audit frequency, methods, responsibilities, planning criteria, and reporting procedures. The organization must define audit criteria, select auditors, and ensure the objectivity and neutrality of the audit process.
      </p>
      <ul className="list-group mb-3">
        <li className="list-group-item">Maintaining documented evidence of audit program implementation and results.</li>
        <li className="list-group-item">Ensuring that audit results are communicated to relevant members of the management team.</li>
      </ul>

      <h3 className="text-secondary">Management Reviews</h3>
      <p>
        Top management is required to conduct periodic reviews at planned intervals to ensure the continuing suitability, adequacy, and effectiveness of the ISMS. These reviews must cover several essential aspects:
      </p>
      <ul className="list-group mb-3">
        <li className="list-group-item">Evaluating the progress of actions initiated from prior management reviews.</li>
        <li className="list-group-item">Identifying changes in external and internal issues relevant for the ISMS.</li>
        <li className="list-group-item">Analyzing feedback on information security performance, including trends in nonconformities, corrective actions, and monitoring results.</li>
      </ul>

      <p>
        Additionally, the management review process includes assessing risk treatment plans, identifying opportunities for continuous improvement, and ensuring decisions made during the review lead to necessary changes in the ISMS. The organization must maintain documented information as evidence of the review outcomes.
      </p>
    </div>
    );
  };
  
  export default PerformanceEvaluation;