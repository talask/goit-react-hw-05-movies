import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import {  SearchFormBtn } from './Searchbar.styled';
import styled from 'styled-components';
import { getMovies } from '../MoviessAPI/MoviesAPI.js';
import { Loader } from '../Loader/Loader.jsx';
import { MovieList } from '../MovieList/MovieList'
import { useSearchParams } from "react-router-dom";

const SearchForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 350px;
    max-width: 600px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    overflow: hidden;
  `;

  const SearchFormInput = styled(Field)`
    display: inline-block;
    width: 350px;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    &input::placeholder {
        font: inherit;
        font-size: 18px;
      }
`;

const initialValues = {
    search: '',
};

const schema = yup.object().shape({
    search: yup.string().required(),
});

export const Searchbar = () => {
   // const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    //const movieName = searchParams.get("name") ?? "";

    // const updateQueryString = (query) => {
    //     const nextParams = query !== "" ? { query } : {};
    //     setSearchParams(nextParams);
    //   };

    function onSubmit(query) {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
        
      }
    
      
    useEffect( () => {
        
        const getsearchMovie = async () => {
        
        try{
            setIsLoading(true);
            setError(null);
            console.log(searchParams);
            const data = await getMovies('search', '', `${searchParams}&`);
            //console.log(data)
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
    
    if(searchParams.length > 0) {
        getsearchMovie();
    }
   
   
}, [searchParams] );
         
    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
        <div>
            <Formik
                initialValues = {initialValues}
                validationSchema = {schema}
                onSubmit = {(values, {resetForm}) => {
                    onSubmit(values.search);
                    resetForm();
                }}
            >
                <SearchForm>
                    <SearchFormInput
                        type="text"
                        name="search"
                        placeholder="Search movie"
                        
                    />

                    <SearchFormBtn type="submit">
                        <FiSearch size="16px"/>
                    </SearchFormBtn>
                    <ErrorMessage name='search' component="div" />
                </SearchForm>
            </Formik>
        </div>
        {movies.length > 0 && <MovieList movies={movies} />}
        </>
        )
    
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};