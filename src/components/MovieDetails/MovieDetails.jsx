import { useParams,  } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader.jsx';

export const MovieDetails = () => {
    const [id, setId] = useState('');
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    //setId(movieId);

   
    useEffect( () => {
        setId(movieId);
    }, [movieId]);

    useEffect( () => {
       
    const getMovieToId = async () => {
        
        try{
            setIsLoading(true);
            setError(null);

            const data = await getMovies('movie', movieId);
            console.log(data)
            if(data)
                setMovie(data);
            else return;

        }catch(error){
            setError(error.message);
            console.log(error)
        }finally{
            setIsLoading(false);
        }
        
        
    }
    
    getMovieToId();

}, [movieId] );
    

    // genres, title, overview,vote_average, backdrop_path, poster_path

    return (
        <>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <div>
            
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} width="350px"/>
                    <h2>{movie.title}</h2>
                    <p>{movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>movie</p>
                </div>
                <div>
                    <h3>Movie</h3>
                    <ul>
                        <li>Movie</li>
                        <li>Movie</li>
                    </ul>
                </div> 
            </>
    )
}