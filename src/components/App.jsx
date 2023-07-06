import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { Loader } from './Loader/Loader';
import { Nav, LinkNav } from './Home/Home.styled';

//import { Home } from './Home/Home';
//import { Movies } from './Movies/Movies';
//import { MovieDetails } from './MovieDetails/MovieDetails';
//import { Cast } from './Cast/Cast'; 
//import { Reviews } from './Reviews/Reviews';


const Home  = lazy(() => import('./Home/Home'));
const Movies =  lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import( './Reviews/Reviews'));

export const App = () => {

  return (
    
    <>
      <section>
        <Nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </Nav>
      </section>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> 
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
      </Suspense>
    </>
  );
};
