import { useState, useEffect } from 'react';
import { getSearchMovie } from 'components/services/fetchAPI';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        const fetchSearchMovies = await getSearchMovie.fetchSearchMovies(query);
        setValue([...fetchSearchMovies]);
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
      <SearchBox onSubmit={handleSubmit} />
      {query && <MoviesList data={value} />}
    </>
  );
};

export default Movies;
