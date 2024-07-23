// src/components/SignInPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Logic for sign in goes here
    navigate('/home');
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInPage;
