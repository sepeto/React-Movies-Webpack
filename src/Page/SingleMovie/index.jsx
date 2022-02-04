import React, { useEffect, useState } from 'react';
// Hooks
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useGetSingleMovie } from '../../Hooks/useGetSingleMovie.js'
// Components
import GoBack from '../../Components/GoBack/index.jsx';
import Loading from '../../Components/Loading/index.jsx';
// Styles
import {
  ContentSingleMovie, 
  HeroMovie, 
  PosterMovie, 
  StatisticsMovie, 
  BodyMovie, 
  RuntimeMovie,
  ListCategories,
  Overview,
} from './SingleMovieStyles.js';
import { ButtonPlayGlobal } from '../../Styles/Globals/ButtonPlayGlobal.js';
import { RatingMovie, TitleMovie, } from '../../Styles/Globals/Title.js';

import { MdPlayArrow, MdStar } from 'react-icons/md';

import config from '../../config.js';

const SingleMovie = () => {

  console.log(document.title);

  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const [ getSingleMovie, movieDetails, isLoading, error] = useGetSingleMovie()
  
  const runtime = !isLoading ? movieDetails.runtime / 60 : null;
  const idMovie = searchParams.get('id') || '';

  useEffect( () => {
    getSingleMovie(idMovie)
    document.title = 'eflix | Movie';

  }, [])

  const HandleVideo = (id) => {
    navigate(`/movie/video?id=${id}`)
  }

  if(isLoading) {
    return (<Loading height='100vh' margin='0'/>)
  }
  return (
    <ContentSingleMovie>
      <HeroMovie img={`${config.IMG_URL}${movieDetails.backdrop_path}`} >
        <PosterMovie onClick={ () =>  HandleVideo(movieDetails.id) }>
          <img src={`${config.IMG_URL}${movieDetails.poster_path}`} alt="" />
          <ButtonPlayGlobal className="btnPlay" >
            <MdPlayArrow />
          </ButtonPlayGlobal>
        </PosterMovie>
        <StatisticsMovie>
          <RatingMovie className="rating" >
            Rating: { movieDetails.vote_average }
            <span className="iconStar" >
              <MdStar />
            </span>
          </RatingMovie>
          <RuntimeMovie>
            { `Runtime: ${runtime.toFixed(1)}h` }
          </RuntimeMovie>
        </StatisticsMovie>
      </HeroMovie>
      <BodyMovie>
        <TitleMovie className="titleMovie">
          {movieDetails.title ? movieDetails.title : movieDetails.name }
        </TitleMovie>
        <ListCategories>
          {
            movieDetails.genres.map( (category) => {
              return (
                <li key={category.id} >
                  { category.name }
                </li>
              )
            } )
          }
        </ListCategories>
        <Overview>
          <TitleMovie as='h4'>
            Overview
          </TitleMovie>
          <p className='overview' >{movieDetails.overview}</p>
        </Overview>
      </BodyMovie>
      <GoBack />
    </ContentSingleMovie>
  )
};

export default SingleMovie;
