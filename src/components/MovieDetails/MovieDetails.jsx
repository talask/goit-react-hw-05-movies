import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader.jsx';


export const MovieDetails = () => {
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
   
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    const{ genres,title, overview,vote_average,  poster_path, } = movie;
   
    useEffect( () => {
       
        const getMovieToId = async () => {
        
        try{
            setIsLoading(true);
            setError(null);

            const data = await getMovies('movie', movieId);
            //console.log(data)
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
    console.log(movieId)
    if(movieId)
    getMovieToId();
   
}, [movieId] );
    



    // genres, title, overview,vote_average, backdrop_path, poster_path

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            {
                movieId 
            && <>
                <div>
            
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} width="350px"/>
                <h2>{title}</h2>
                <p>User Score: {vote_average*10}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                    
                <p>{genres && genres.map(({name}) => name).join(" ")}</p>
            </div>
            <div>
                <h3>Aditional Information</h3>
                <ul>
                    <li key="cast">
                            <Link to="cast" >Cast</Link>
                        </li>
                        <li key="reviews">
                            <Link to="reviews" state={{ from: location }}>Reviews</Link>
                        </li>
                        
                        
                    </ul>
                    <Outlet />
                </div> 
            </>
             
            
                
            
                 }
            </>
    )
}