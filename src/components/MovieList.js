import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', image: 'path/to/movie1.jpg' },
  { id: 2, title: 'Movie 2', image: 'path/to/movie2.jpg' },
  // Add more movies here
];

const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.image} alt={movie.title} width="100" />
          <Link to="/select-theatre">Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
