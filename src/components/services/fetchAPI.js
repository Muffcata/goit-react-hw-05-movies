import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '4644ef2dd871b6a3e3d5190dd084c262';

const fetchMoviesTrending = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};

const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

const fetchCastMovie = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const fetchReviewsMovie = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

const fetchSearchMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getReviewsMovie = { fetchReviewsMovie };
export const getTrendingMovie = { fetchMoviesTrending };
export const getMovieById = { fetchMovieById };
export const getCastMovie = { fetchCastMovie };
export const getSearchMovie = { fetchSearchMovies };
