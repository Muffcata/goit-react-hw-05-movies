import React from 'react';
import { Link } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
