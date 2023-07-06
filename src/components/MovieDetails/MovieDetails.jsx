import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader';
import { Details, Wrapper } from "./Movie.styled.jsx";


const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const [movie, setMovie] = useState({}); 
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    const{ genres,title, overview,vote_average,  poster_path, } = movie;
   
    useEffect( () => {
       
        const getMovieToId = async () => {
        
        try{
           
            setError(null);

            const data = await getMovies('movie', movieId);
           
            if(data) setMovie(data);
                      
        }catch(error){
            setError(error.message);
            console.log(error)
        }
        
        
    }
   
    if(movieId)
    getMovieToId();
   
}, [movieId] );
    

    return (
        <>
            
            {error && <p>{error}</p>}
           
            {
                movieId 
            && <>
            <p>
                <Link to={backLinkHref}>Back to movies</Link>
            </p>
                 
            <Details>
            
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} width="350px"/>
                <Wrapper>
                    <h2>{title}</h2>
                    <p>User Score: {vote_average*10}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    
                    <p>{genres && genres.map(({name}) => name).join(" ")}</p>
                </Wrapper>
            </Details>
            <div>
                <h3>Aditional Information</h3>
                <ul>
                    <li key="cast">
                            <Link to="cast"  state={{ from: backLinkHref }}>Cast</Link>
                        </li>
                        <li key="reviews">
                            <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
                        </li>
                        
                        
                    </ul>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
            </div> 
            </>
            }
        </>
    )
}

export default MovieDetails;