const ContextOfTheOrganization = () => {
  return (
    <div class="card shadow p-4">
      <h1 class="text-primary">Context of the organization</h1>
      <p>
        ISO/IEC 27001 begins with the organization's need to understand itself
        and its operational context. This includes defining both external and
        internal factors that impact the organization's ability to achieve its
        ISMS objectives.
      </p>

      <h3 class="text-secondary">Understanding the Organization</h3>
      <ul class="list-group mb-3">
        <li class="list-group-item">
          Identifying internal and external parties relevant to the ISMS.
        </li>
        <li class="list-group-item">
          Determining the requirements of these affected parties regarding ISMS.
        </li>
        <li class="list-group-item">
          Documenting how the ISMS intends to address these requirements.
        </li>
      </ul>

      <h3 class="text-secondary">Defining ISMS Boundaries</h3>
      <p>
        Once the external and internal issues are defined, the organization must
        determine the boundaries and applicability of the ISMS. This phase is
        critical in defining the ISMS scope.
      </p>
      <ul class="list-group mb-3">
        <li class="list-group-item">
          Considering all internal and external factors.
        </li>
        <li class="list-group-item">
          Identifying interfaces and dependencies between the organization and
          external entities.
        </li>
        <li class="list-group-item">
          Ensuring that the ISMS scope is clearly documented.
        </li>
      </ul>

      <h3 class="text-secondary">Implementation and Continuous Improvement</h3>
      <p>
        The final requirement within the context of the organization clause in
        ISO/IEC 27001 states that the organization must:
      </p>
      <ul class="list-group mb-3">
        <li class="list-group-item">
          Establish, implement, maintain, and continually improve an ISMS.
        </li>
        <li class="list-group-item">
          Ensure compliance with ISO/IEC 27001 requirements.
        </li>
      </ul>
    </div>
  );
};

export default ContextOfTheOrganization;
