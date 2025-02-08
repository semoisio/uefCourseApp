

const Improvement = () => {

    return (
        <div className="card shadow p-4">
      <h2 className="text-primary">Commitment to Continual Improvement of ISMS</h2>
      <p>
        An integral part of the ISMS is the commitment to continually improve the ISMS. To comply with the
        requirements of the ISO/IEC 27001 standard, the organization must commit to continually improving the
        suitability, adequacy, and effectiveness of its ISMS.
      </p>
      
      <h3 className="text-secondary">Responding to Nonconformities</h3>
      <p>
        In case nonconformities arise, the organization must respond promptly by taking action to control and correct
        nonconformities, thus addressing any associated consequences.
      </p>
      
      <h3 className="text-secondary">Corrective Action Process</h3>
      <p>
        To prevent the recurrence or occurrence of similar nonconformities, the organization must evaluate the need for
        corrective action by:
      </p>
      <ul className="list-group mb-3">
        <li className="list-group-item">Reviewing the nonconformity.</li>
        <li className="list-group-item">Identifying its root causes.</li>
        <li className="list-group-item">Assessing the potential for similar issues elsewhere.</li>
      </ul>
      
      <p>
        Moreover, any necessary actions must be implemented, and their effectiveness must subsequently be reviewed.
      </p>

      <h3 className="text-secondary">Aligning Corrective Actions</h3>
      <p>
        It is essential to ensure that corrective actions align with the effects of the encountered nonconformities.
      </p>

      <h3 className="text-secondary">Documented Evidence</h3>
      <p>
        Documented information provides evidence of the nature of nonconformities, along with any subsequent actions
        taken, as well as the outcomes of the corrective actions implemented. (ISO/IEC, 2022)
      </p>
    </div>
    );
  };
  
  export default Improvement;