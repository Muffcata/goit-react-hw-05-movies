import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { lazy, Suspense } from 'react';
import 'index.css';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Home = lazy(() => import('pages/Home/Home'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const DetailsMovies = lazy(() => import('pages/DetailsMovies/DetailsMovies'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<DetailsMovies />} />
          <Route path={`/movies/:movieId/cast`} element={<Cast />} />
          <Route path={`/movies/:movieId/reviews`} element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
