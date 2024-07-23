import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', image: 'movie1.jpg' },
  { id: 2, title: 'Movie 2', image: 'movie2.jpg' },
  { id: 3, title: 'Movie 3', image: 'movie3.jpg' },
  // Add more movies as needed
];

const MovieSelection = () => {
  const navigate = useNavigate();

  const handleMovieSelect = (movieId) => {
    // Perform movie selection logic
    navigate(`/theatre-selection?movieId=${movieId}`);
  };

  return (
    <div>
      <h2>Select a Movie</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '150px', height: '200px', cursor: 'pointer' }}
              onClick={() => handleMovieSelect(movie.id)}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSelection;
