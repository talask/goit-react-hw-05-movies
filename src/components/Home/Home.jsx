import { useState, useEffect } from 'react';
import { Container } from './Home.styled.jsx'
import { Loader } from '../Loader/Loader.jsx';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {

        getMovies('home');

    },[]);

    return (
        
            <Container>
                павп
                {isLoading && <Loader />}
                {/* {error && <p>{error}</p>}
                {movies.length > 0 && <MovieList monies={movies} />} */}
            </Container>
       
  );
        
}