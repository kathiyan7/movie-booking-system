// src/components/ForgotPasswordPage.js
import React from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
