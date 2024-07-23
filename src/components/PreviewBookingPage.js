// src/components/PreviewBookingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PreviewBookingPage.css';

const PreviewBookingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <p>Movie Name: Movie 1</p>
      <p>Theatre Name: Theatre 1</p>
      <p>Timing: 7:00 PM</p>
      <p>Seat Number: A10</p>
      <button onClick={() => navigate('/payment')}>Pay Now</button>
    </div>
  );
};

export default PreviewBookingPage;
