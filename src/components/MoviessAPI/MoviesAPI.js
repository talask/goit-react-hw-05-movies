import axios from 'axios';

//const API_KEY = 'api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdjNzk5ZDVlZDcwNzgyZGY1MTJiNTExNTRjMTg4NSIsInN1YiI6IjY0OTdjNzMzNjJmMzM1MDBjYTQzODYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nPeSofqctbcrTN-4r6SV8I78cs_JotRjk-M6zn_va2I';
const API_KEY = 'api_key=db7c799d5ed70782df512b51154c1885';
//db7c799d5ed70782df512b51154c1885
const URL = 'https://api.themoviedb.org/3/';
const options = {
    home: 'trending/all/day',
    movie: 'movie/',
    search: "search/movie",
    
}

export const getMovies = async (val, param='', query='') => {
    const response = await axios.get(`${URL}${options[val]}${param}?${query}${API_KEY}`);
   
    return response.data;
}