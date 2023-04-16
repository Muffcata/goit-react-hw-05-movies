import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import style from 'components/MovieDetails/MovieDetails.module.css';
import DefaultPoster from 'images/default-movie-1-1-768x1129.jpg';

export const MovieDetails = ({ movie }) => {
  const { title, overview, vote_average, genres, poster_path, original_title } =
    movie;
  const navigate = useNavigate();
  const userScore = `User Score: ${(vote_average * 10).toFixed(0)}%`;
  const genresList = `${genres?.map(({ name }) => name)}`;

  return (
    <>
      <div className={style.bg}>
        <button
          className={style.btn}
          type="button"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
      <section className={style.container}>
        <div className={style.card}>
          <div className={style.wrapper}>
            <img
              className={style.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : DefaultPoster
              }
              alt={original_title}
            />
          </div>
          <div className={style.box}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.score}>{userScore}</p>
            <div>
              <h2 className={style.header}>Overview</h2>
              <p className={style.description}>{overview}</p>
            </div>
            <div>
              <h3 className={style.header}>Genres</h3>
              <p className={style.genres}>{genresList}</p>
            </div>
            <div className={style.addBox}>
              <h3 className={style.header}>Additional information</h3>
              <Link className={style.link} to="cast">
                Cast
              </Link>
              <Link className={style.link} to="reviews">
                Reviews
              </Link>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
