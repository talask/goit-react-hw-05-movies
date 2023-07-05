import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader.jsx';

const Cast = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();  


    useEffect( () => {
       
        const getCast = async () => {
            
            try{
                setIsLoading(true);
                setError(null);
    
                const data = await getMovies('movie', `${movieId}/credits`);
                
                if(data)
                   setCast(data.cast);
                else return;
               
            }catch(error){
                setError(error.message);
                console.log(error)
            }finally{
                setIsLoading(false);
            }
            
            
        }
        
        getCast();
       
    }, [movieId] );

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            <ul>
            {cast && cast.map(({id, profile_path,character,name}) => {
                    return (
                        <li key={id}>
                            <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name} width="150px"/>
                            <p>{name}</p>
                            <p>{character}</p>
                            
                        </li>
                    
                    )})
                }
            </ul>
        </>
        
    )
 
}

export default Cast;