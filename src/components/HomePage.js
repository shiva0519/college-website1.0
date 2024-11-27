
import React, { useState } from 'react';
import Navbar from './Navbar';
import SubjectSelection from './SubjectSelection';
import papersData from '../data/papers.json'; 
import './HomePage.css';

const HomePage = () => {
  const [showSemesterSelection, setShowSemesterSelection] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showSchemeSelection, setShowSchemeSelection] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [filteredPaper, setFilteredPaper] = useState(null);

  const handleGetQuestionPapers = () => {
    setShowSemesterSelection(true);
    setShowSchemeSelection(false);
    setShowSubjectSelection(false);
    setSelectedSemester(null);
    setSelectedScheme(null);
    setSelectedSubject(null);
    setFilteredPaper(null);
  };

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
    setShowSemesterSelection(false);
    setShowSchemeSelection(true);
  };

  const handleSchemeSelect = (scheme) => {
    setSelectedScheme(scheme);
    setShowSchemeSelection(false);
    setShowSubjectSelection(true);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    
    const paper = papersData.find(
      (p) =>
        p.semester === selectedSemester &&
        p.scheme === selectedScheme &&
        p.subject === subject
    );
    
    if (paper) {
      setFilteredPaper(paper);
    } else {
      setFilteredPaper(null);
      alert('No paper found for the selected semester, scheme, and subject.');
    }
  };
  

  // Functions for going back one step
  const handleBackToSemester = () => {
    setFilteredPaper(null); 
    setShowSchemeSelection(false);
    setShowSemesterSelection(true);
  };


  const handleBackToScheme = () => {
    setFilteredPaper(null); 
    setShowSubjectSelection(false);
    setShowSchemeSelection(true);
  };

  const handleBackToSubject = () => {
    setFilteredPaper(null); 
    setShowSubjectSelection(false);
    setShowSchemeSelection(true);
  };

 

 
  



  return (
    <div>
      <div className="top-banner">
        <h1 className="banner-heading">VTU-QUESTION PAPER HUB</h1>
        <h4>Master Your Exams with Past Papers</h4>
      </div>

      <div className="homepage-container">
        <div className="homepage-content text-center">
          <p className="homepage-info">
          VTU Question Paper Hub is a comprehensive platform designed to provide B.Tech Computer Science students with seamless access to previous years' question papers.
          </p>
          <p className="homepage-importance">
          By analyzing these papers, students can prioritize key topics, identify frequently asked questions, and develop an effective, focused study strategy tailored to their academic success.
          <p style={{color:"red"}}><b>NOTE:Compter science and engineering question papers only</b></p></p>
          
          <button className="hompage-btn" onClick={handleGetQuestionPapers}>
            <b>EXPLORE MORE</b>
          </button>
          
          {/* Semester Selection */}
          {showSemesterSelection && (
            <div>
              <h3>Select Semester</h3>
              <div className="semester-selection">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button key={sem} onClick={() => handleSemesterSelect(sem)}>
                    Semester {sem}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scheme Selection */}
          {showSchemeSelection && (
            <div>
              <h3>Select Scheme</h3>
              <div className="scheme-selection">
                {["2021", "2022"].map((scheme) => (
                  <button key={scheme} onClick={() => handleSchemeSelect(scheme)}>
                    Scheme {scheme}
                  </button>
                ))}
              </div>
              <button className="back-btn" onClick={handleBackToSemester}>Back to Semester</button>
            </div>
          )}

          {/* Subject Selection */}
          {showSubjectSelection && (
            <div>
              <h3>Select Your Subject</h3>
              <p className="select-subject-message">
                Choose the subject for the selected semester and scheme. This step is required to access the corresponding paper.
              </p>
              <div className="subject-selection">
                <SubjectSelection
                  selectedSemester={selectedSemester}
                  selectedScheme={selectedScheme}y
                  onSelect={handleSubjectSelect}
                />
              </div>
              <button className="back-btn" onClick={handleBackToScheme}>Back to Scheme</button>
            </div>
          )}

          {/* Display Paper Link */}
          {filteredPaper && (
  <div>
    <h3>Selected Subject: {selectedSubject}</h3>
    <p>Papers for this subject can be accessed below:</p>
    {filteredPaper.paperUrl && (
      <div>
        <a href={filteredPaper.paperUrl} target="_blank" rel="noopener noreferrer">
          Paper 1
        </a>
      </div>
    )}
    {filteredPaper.paperUrl2 && (
      <div>
        <a href={filteredPaper.paperUrl2} target="_blank" rel="noopener noreferrer">
          Paper 2
        </a>
      </div>
    )}
    {filteredPaper.paperUrl3 && (
      <div>
        <a href={filteredPaper.paperUrl3} target="_blank" rel="noopener noreferrer">
          Paper 3
        </a>
      </div>
    )}
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
