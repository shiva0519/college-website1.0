
import React, { useState } from 'react';
import papersData from "../data/papers.json";

const SubjectSelection = ({ selectedSemester, selectedScheme, onSelect }) => {
  const [alertShown, setAlertShown] = useState(false);

  const subjects = papersData
    .filter((p) => p.semester === selectedSemester && p.scheme === selectedScheme)
    .map((p) => p.subject);

  const handleSubjectSelect = (subject) => {
    const paper = papersData.find(
      (p) =>
        p.semester === selectedSemester &&
        p.scheme === selectedScheme &&
        p.subject === subject
    );

    if (paper) {
      onSelect(subject); 
    } else {
      if (!alertShown) {
        alert('No paper found for the selected semester, scheme, and subject.');
        setAlertShown(true); 
      }
    }
  };

  return (
    <div>
      {subjects.length > 0 ? (
        subjects.map((subject, index) => (
          <button key={index} onClick={() => handleSubjectSelect(subject)}>
            {subject}
          </button>
        ))
      ) : (
        <p>No subjects available for this semester and scheme.</p>
      )}
    </div>
  );
};

export default SubjectSelection;
