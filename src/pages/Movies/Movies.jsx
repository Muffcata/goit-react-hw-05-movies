import { useState, useEffect } from 'react';
import { getSearchMovie } from 'components/services/fetchAPI';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Spinner } from 'components/Spinner/Spinner';

export const Movies = () => {
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getSearchedMovies = async () => {
      try {
        const fetchSearchMovies = await getSearchMovie.fetchSearchMovies(query);
        setValue([...fetchSearchMovies]);
        setIsLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    getSearchedMovies(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      {isLoading && <Spinner />}
      <SearchBox onSubmit={handleSubmit} />
      {query && <MoviesList data={value} />}
    </>
  );
};

export default Movies;
