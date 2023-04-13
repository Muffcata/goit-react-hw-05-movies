import React from 'react';
import { Link } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  const { title, overview, vote_average, genres, poster_path, original_title } =
    movie;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const userScore = `User Score: ${vote_average * 10}%`;
  const genresList = `${genres?.map(({ name }) => name + '')}`;

  return (
    <>
      <div>
        <img src={poster} alt={original_title} />
      </div>
      <h1>{title}</h1>
      <p>{userScore}</p>
      <div>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
      <div>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
    </>
  );
};

export default MovieDetails;
