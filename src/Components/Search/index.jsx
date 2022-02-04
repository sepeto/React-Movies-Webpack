import React, { useEffect, useState } from 'react';
// Hooks
import { useGetMovieByName } from '../../Hooks/useGetMovieByName.js';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// Components
import CardMovie from '../CardMovie/index.jsx';
import Loading from '../Loading/index.jsx';
// Styles
import { ContentSearch, ContentIcon, ContentForm, ButtonSubmit, ContentResultSearch } from './SearchStyles.js';
import { Title } from '../../Styles/Globals/Title.js'
// Icons
import { MdChevronRight, MdSearch } from 'react-icons/md';


const Search = ({ isOpen, onClose }) => {

  const [ searchParams, setSearchParams] = useSearchParams();

  const key = searchParams.get('keyword') || '';

  const [ movies, isLoading, error, getMovieByName ] = useGetMovieByName();
  const { trendingMovies, isLoadingTrending, errorTrending } = useSelector( state => state.trendingMovies )

  useEffect( () => {
    if( key.length > 2 ) {
      getMovieByName(key)
    }
  },[key] )
  
  
  const handleChange = (e) => {
    const value = e.target.value;
    const keyword = value.toLowerCase().replaceAll(' ', '%20');

    if (keyword.length <= 2) {
      setSearchParams({})
    } else {
      setSearchParams({keyword});
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    
    if (keyword.length <= 2) {
      return;
    }
    getMovieByName(key)
  }

  return (
    <ContentSearch isOpen={isOpen} >
      <ContentIcon onClick={onClose} >
        <MdChevronRight />
      </ContentIcon>
      <ContentForm onSubmit={ handleSubmit } >
        <input 
          type="text" 
          placeholder='What would you like to see?' 
          name='keyword' 
          className='inputTitle'
          onChange={ handleChange }
          id='keyword'
          required
        />
        <ButtonSubmit as='button' type="submit" onSubmit={ handleSubmit }>
          <MdSearch />
        </ButtonSubmit>
      </ContentForm>
      <ContentResultSearch>
        {
          isLoadingTrending
          ? <Loading />
          : key.length < 3
            ?(
              <>
                <Title className='title' >Trending</Title>
                <CardMovie movies={trendingMovies}/>
              </>
            )
            : isLoading 
              ? <Loading />
              : movies.length === 0 
                ? ( <div className='notFound'>We did not find anything</div> )
                : (<>
                    <Title>{key}</Title>
                    <CardMovie movies={movies}/>
                  </>)
        }
      </ContentResultSearch>
    </ContentSearch>
  )
};

export default Search;  
