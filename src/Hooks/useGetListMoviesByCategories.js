import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { insertMoviesByCategories } from '../Storage/Reducers/MoviesByCategories.js';

import config from '../config.js'

export const useGetListMoviesByCategories = () => {
  
  const { movies } = useSelector( state => state.moviesByCategory)
  const dispatch = useDispatch();
  const category = localStorage.getItem('currentCategory'); 

  const getListMovies = async () => {
    dispatch( insertMoviesByCategories({ movies: undefined, isLoading: true, error: null }) )
    try {
      const { data } = await axios.get(`${config.BASE_URL}discover/movie?api_key=${config.API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`);

      if (data.results === movies) {
        dispatch( insertMoviesByCategories({ movies: undefined, isLoading: false, error: null }) )
      } else {
        dispatch( insertMoviesByCategories({ movies: data.results, isLoading: false, error: null }) )
      }

    } catch (error) {
      dispatch( insertMoviesByCategories({ movies: [], isLoading: false, error: error }) )
    }
  }



  return [ getListMovies ]
};

