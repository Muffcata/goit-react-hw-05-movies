import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovie } from 'components/services/fetchAPI';

export const Home = () => {
  const [nameMovies, setNameMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const getMovies = await getTrendingMovie.fetchMoviesTrending();
        setNameMovies([...getMovies]);
      } catch (error) {
        console.log('error');
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <div>
        <MoviesList data={nameMovies} />
      </div>
    </>
  );
};

export default Home;
