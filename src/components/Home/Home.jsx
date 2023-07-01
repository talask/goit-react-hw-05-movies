import { useState, useEffect } from 'react';
import { Container } from './Home.styled.jsx'
import { Loader } from '../Loader/Loader.jsx';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { MovieList } from '../MovieList/MovieList'

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
       
        const fetchLoadingMovies = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getMovies('home');
               
                if(data.results.length > 0) {
                    setMovies(data.results);
                }else{
                    alert('Ooops.. Nothing find')
                }
            }catch (error){
                setError(error.message);
                console.log(error);
            }finally{
                setIsLoading(false);
            }
       
        }
        fetchLoadingMovies();
    },[]);

    const handleToMovie = (id) => {
        console.log(id);
    }

    return (
        
            <Container>
                павп
                {isLoading && <Loader />}
                {error && <p>{error}</p>}
                {movies.length > 0 && <MovieList movies={movies} handleToMovie={handleToMovie}
                />}
            </Container>
       
  );
        
}