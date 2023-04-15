import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovie } from 'components/services/fetchAPI';
import style from 'pages/Home/Home.module.css';
import { Spinner } from 'components/Spinner/Spinner';

export const Home = () => {
  const [nameMovies, setNameMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadMovies = async () => {
      try {
        const getMovies = await getTrendingMovie.fetchMoviesTrending();
        setNameMovies([...getMovies]);
        setIsLoading(false);
      } catch (error) {
        console.log('error');
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <h1 className={style.title}>Trending movies :</h1>
      <div>
        <MoviesList data={nameMovies} />
      </div>
    </>
  );
};

export default Home;
