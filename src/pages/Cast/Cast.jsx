import { getCastMovie } from 'components/services/fetchAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;

  useEffect(() => {
    const castMovie = async () => {
      try {
        const fetchedCastMovies = await getCastMovie.fetchCastMovie(id);
        setCast([...fetchedCastMovies.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    castMovie(id);
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(({ character, id, profile_path, name }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
