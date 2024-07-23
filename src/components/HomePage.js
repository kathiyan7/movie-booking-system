// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const movies = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
    { id: 3, name: 'Movie 3' },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h3>{movie.name}</h3>
          <button onClick={() => navigate('/theatre-selection')}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
