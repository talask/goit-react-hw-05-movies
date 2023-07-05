import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader.jsx'; 

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();  

    useEffect( () => {
       
        const getReviews = async () => {
            
            try{
                setIsLoading(true);
                setError(null);
    
                const data = await getMovies('movie', `${movieId}/reviews`);
               
                if(data)
                  setReviews(data.results);
                else return;
               
            }catch(error){
                setError(error.message);
                console.log(error)
            }finally{
                setIsLoading(false);
            }
            
            
        }
        
        getReviews();
       
    }, [movieId] );

    return (
        <>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <ul>
        {reviews.length > 0 
            ?  reviews.map(({author, content}, idx) => {
                return (
                    <li key={idx}>
                        
                        <h3>{author}</h3>
                        <p>{content}</p>
                        
                    </li>
                
                )})
                : <p>We don't have any reviews to this movie</p>
            }
        </ul>
    </>
    )
}

export default Reviews;