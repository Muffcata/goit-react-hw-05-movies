import React from 'react';
import { Link } from 'react-router-dom';
import style from 'components/MoviesList/MoviesList.module.css';

export const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(movie => (
        <li className={style.list} key={movie.id}>
          <Link className={style.items} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
