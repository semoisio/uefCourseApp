import React from 'react';

function HistoryText() {
  return (
    <div className="card shadow p-4">
      <h2 className="text-primary">History of ISO/IEC 27001 Standard</h2>
      
      <p>
        The origin of the ISO/IEC 27001 standard dates back to the early 1990s when the Commercial Computer 
        Security Centre (CCSC) was tasked by the UK government’s Department for Trade and Industry with 
        creating a set of evaluation criteria to determine the security of Information Technology (IT) products 
        and a code of best practices for IT. The work of the CCSC resulted in the DISC PD003 document.
      </p>
      
      <h3 className="text-secondary">Development of BS7799 Standards</h3>
      <p>
        In the late 1990s, work on the DISC PD003 document continued, leading to the creation of two 
        separate standards:
      </p>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          <strong>BS7799-1:</strong> Included a set of controls and objectives that laid the groundwork for the ISO/IEC 27002 standard.
        </li>
        <li className="list-group-item">
          <strong>BS7799-2:</strong> Provided guidelines for developing an information security management system, forming the basis of ISO/IEC 27001.
        </li>
      </ul>

      <h3 className="text-secondary">Transition to ISO/IEC 27001</h3>
      <p>
        The ISO and IEC organizations initiated the first revision of the BS7799-2 standard in December 2000, 
        renaming it to the ISO/IEC 17799 standard. Due to further revisions in 2005, the BS7799-2 standard 
        was formally renamed ISO/IEC 27001, marking the first version of the 27001 standard. 
      </p>

      <h3 className="text-secondary">Evolution of ISO/IEC 27001</h3>
      <ul className="list-group mb-3">
        <li className="list-group-item">The ISO/IEC 17799 standard was renamed to ISO/IEC 27002 to establish a unified set of standards.</li>
        <li className="list-group-item">ISO/IEC 27001 continues to undergo revisions at changing intervals.</li>
        <li className="list-group-item">The first revision of ISO/IEC 27001 was published in 2013.</li>
        <li className="list-group-item">The most recent version was published in 2022.</li>
      </ul>
    </div>
  );
}

export default HistoryText;
