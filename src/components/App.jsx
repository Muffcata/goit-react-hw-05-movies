import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Cast } from 'pages/Cast/Cast';
import { Home } from 'pages/Home/Home';
import { Navigation } from './Navigation/Navigation';
import DetailsMovies from 'pages/DetailsMovies/DetailsMovies';
// import { Movies } from 'components/Movies/Movies';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        <Route path="/movies/:movieId" element={<DetailsMovies />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default App;
