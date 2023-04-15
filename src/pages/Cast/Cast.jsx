import { getCastMovie } from 'components/services/fetchAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from 'pages/Cast/Cast.module.css';
import { Spinner } from 'components/Spinner/Spinner';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const castMovie = async () => {
      try {
        const fetchedCastMovies = await getCastMovie.fetchCastMovie(id);
        setCast([...fetchedCastMovies.cast]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    castMovie(id);
  }, [id]);

  return (
    <>
      {isLoading && <Spinner />}
      <h1>Cast</h1>
      <ul className={style.list}>
        {cast.map(({ character, id, profile_path, name }) => (
          <li className={style.item} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p className={style.name}>{name}</p>
            <p className={style.character}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
