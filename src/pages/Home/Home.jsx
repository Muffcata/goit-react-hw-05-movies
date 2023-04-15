import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovie } from 'components/services/fetchAPI';
import style from 'pages/Home/Home.module.css';

export const Home = () => {
  const [nameMovies, setNameMovies] = useState([]);

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
      <h1 className={style.title}>Trending movies :</h1>
      <div>
        <MoviesList data={nameMovies} />
      </div>
    </>
  );
};

export default Home;
