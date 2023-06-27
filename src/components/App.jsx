import { Routes, Route, Link, Outlet} from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';

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
        <Route path="/movie" element={<Movies />} > 
          {/* <Route path="movieId" element={<MovieDetails />} >
          <Outlet />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
