import { Routes, Route, Link,} from 'react-router-dom';
//import { lazy } from "react";
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
//const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {

  return (
    
    <>
      <section>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </section>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> 
      </Routes>
    </>
  );
};
