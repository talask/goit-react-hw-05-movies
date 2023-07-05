
import { Container } from "../Home/Home.styled";
import { MovieList } from "../MovieList/MovieList";
//import { MovieDetails } from "../MovieDetails/MovieDetails";
import { Searchbar } from "components/Searchbar/Searchbar.jsx";
import { useState, useEffect } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { useSearchParams } from "react-router-dom";
import { Loader } from '../Loader/Loader.jsx';


const Movies = () => {
   
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const movieName = searchParams.get("query") ?? "";
   

    useEffect( () => {
        
        const getsearchMovie = async () => {
           
        try{
            setIsLoading(true);
            setError(null);
           
            const data = await getMovies('search', '', `query=${movieName}&`);
            
            if(data)
                setMovies(data.results);
            else return;
           
        }catch(error){
            setError(error.message);
            console.log(error)
        }finally{
            setIsLoading(false);
        }
        
    }
    
    if(movieName.length > 0) {
        getsearchMovie();
    }
   
}, [movieName] );



const onSubmit = (query) => {

    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
    
  }

    return (
       <div>
            <Container>
                <Searchbar value={movieName} onSubmit={onSubmit}/>
                {movies.length > 0 && <MovieList movies={movies} />}
                {isLoading && <Loader />}
                {error && <p>{error}</p>}
            </Container>
       </div> 
    )
    
}
export default Movies;