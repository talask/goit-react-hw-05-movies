import { Link, useLocation } from "react-router-dom";

export const MovieList = ({movies}) => {
    const location = useLocation();
    return (
        <ul>
            { movies.map(({ id, title, name }) => (
                <li key={id} >
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        {title ? title : name}
                    </Link>
                       
                   
                </li>
            ))
            }
        </ul>
    )
}