// src/components/PaymentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Implement payment logic
    navigate('/confirmation');
  };

  return (
    <div className="form-container">
      <h2>Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
