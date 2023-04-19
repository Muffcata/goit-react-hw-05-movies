import { useState, useEffect } from 'react';
import { getMovieById } from 'components/services/fetchAPI';
import { useParams, Outlet } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Spinner } from 'components/Spinner/Spinner';

export const DetailsMovies = () => {
  const [details, setDetails] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const detailsMovie = async () => {
      try {
        const fetchedMovies = await getMovieById.fetchMovieById(id);
        setDetails(fetchedMovies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    detailsMovie(id);
  }, [id]);

  return (
    <div>
      {isLoading && <Spinner />}

      <MovieDetails movie={details} />
      <Outlet />
    </div>
  );
};

export default DetailsMovies;
