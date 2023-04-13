import { useState, useEffect } from 'react';
import { getMovieById } from 'components/services/fetchAPI';
import { useParams } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const DetailsMovies = () => {
  const [details, setDetails] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;

  useEffect(() => {
    const detailsMovie = async () => {
      try {
        const fetchedMovies = await getMovieById.fetchMovieById(id);
        setDetails(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    detailsMovie(id);
  }, [id]);

  return (
    <div>
      <MovieDetails movie={details} />
    </div>
  );
};

export default DetailsMovies;
