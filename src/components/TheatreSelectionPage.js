// src/components/TheatreSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TheatreSelectionPage.css';

const TheatreSelectionPage = () => {
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate('/preview-booking');
  };

  return (
    <div className="theatre-selection-container">
      <h2>Select a Theatre</h2>
      <div className="theatre-list">
        <div className="theatre-item">
          <h3>Theatre 1</h3>
          <button onClick={handlePreview}>Preview</button>
        </div>
        {/* Repeat for other theatres */}
      </div>
    </div>
  );
}

export default TheatreSelectionPage;
