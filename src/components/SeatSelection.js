import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const navigate = useNavigate();

  const handleSeatSelection = () => {
    // Perform seat selection logic
    navigate('/preview-booking');
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      <button onClick={handleSeatSelection}>Select Seats</button>
    </div>
  );
};

export default SeatSelection;
