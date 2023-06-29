import { useParams } from "react-router-dom";
import { getMovies } from '../MoviessAPI/MoviesAPI.js';

export const MovieDetails = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const getMovieToId = async () => {
        try{
            const data = await getMovies('movie', movieId);
            return data;
        }catch(error){
            console.log(error)
        }finally{
            console.log("finally")
        }
        
        
    } 
    
    const movie = getMovieToId();
   // console.log(movie);
    //const location = useLocation();
    // genres, title, overview,vote_average, backdrop_path, poster_path



    return (
        <>
        <div>
                    <img src={movie.poster_path} alt={movie.title} />
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