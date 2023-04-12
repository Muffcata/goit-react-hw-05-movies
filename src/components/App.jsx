import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Navigation } from './Navigation/Navigation';
// import { Cast } from './Cast/Cast';
import { Home } from 'pages/Home/Home';
// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { Movies } from 'components/Movies/Movies';
// import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </>
  );
};

export default App;
