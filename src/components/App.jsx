import { Routes, Route, Link, Outlet} from 'react-router-dom';
//import { lazy } from "react";
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
//const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

//const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdjNzk5ZDVlZDcwNzgyZGY1MTJiNTExNTRjMTg4NSIsInN1YiI6IjY0OTdjNzMzNjJmMzM1MDBjYTQzODYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nPeSofqctbcrTN-4r6SV8I78cs_JotRjk-M6zn_va2I';
export const App = () => {

  return (
    
    <>
    <section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie">Movies</Link>
       
      </nav>
      </section>
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
          <Route path="/movies/:movieId" element={<MovieDetails />} >
          {/* <Outlet />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        
      </Routes>
    </>
  );
};
