
import { Container } from "../Home/Home.styled";
import { MovieDetails } from "../MovieDetails/MovieDetails";
import { Searchbar } from "components/Searchbar/Searchbar.jsx";

export const Movies = () => {
    
    
    return (
       <div>
            <Container>
                <MovieDetails />
                <Searchbar />
            </Container>
       </div> 
    )
    
}