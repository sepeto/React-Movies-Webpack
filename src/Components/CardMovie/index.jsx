import React from 'react';
// Hooks
import { Link } from 'react-router-dom'
// Styles
import { ContentCardMovie, ItemMovie, ContentInfo, InfoMovie, ButtonPlay } from './CardMovieStyles.js';
import { TitleMovie, RatingMovie } from '../../Styles/Globals/Title.js';
import { MdPlayArrow, MdStar } from 'react-icons/md';
// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import config from '../../config'


const CardMovie = ({ movies }) => {
  return (
    <ContentCardMovie className='contentCards'>
      <Swiper
        slidesPerView={2}
        // centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={
          {
            480: {
              width: 480,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
              spaceBetween: 15
            },
            1440: {
              width: 1440,
              slidesPerView: 6,
              spaceBetween: 15
            }
          }
        }
      >
        {
          movies.map( (movie) => (
            <SwiperSlide key={movie.id} className="swiperSlide" >
              <Link to={`/movie?id=${movie.id}`}>
                <ItemMovie img={`${config.IMG_URL}${movie.poster_path}`}>
                  <ContentInfo>
                    <InfoMovie >
                      <RatingMovie className='rating' > <span className='iconStar' ><MdStar /></span> {movie.vote_average}</RatingMovie>
                      <TitleMovie className='title'>{ movie.title ? movie.title : movie.name }</TitleMovie>
                    </InfoMovie>
                    <ButtonPlay>
                      <MdPlayArrow />
                    </ButtonPlay>
                  </ContentInfo>
                </ItemMovie>
              </Link>
            </SwiperSlide>
          ) )
        }
      </Swiper>
    </ContentCardMovie>
  )
};

export default CardMovie;
