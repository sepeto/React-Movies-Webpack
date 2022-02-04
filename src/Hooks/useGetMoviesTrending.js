import axios from 'axios';

import {useDispatch} from 'react-redux'
import { insertTrendingMovies } from '../Storage/Reducers/Trending.js';

import config from '../config.js';

export const useGetMoviesTrending = () => {

  const dispatch = useDispatch();

  const getMoviesTrending = async () => {
    dispatch( insertTrendingMovies( { trendingMovies: [], isLoadingTrending: true, errorTrending: null } ) )
    try {
      const { data } = await axios.get(`${config.BASE_URL}trending/all/week?api_key=${config.API_KEY}`)
      const sliceListMovies = data.results.slice(0, 10);

      dispatch( insertTrendingMovies( { trendingMovies: sliceListMovies , isLoadingTrending: false, errorTrending: null } ) )
    } catch (error) {
      dispatch( insertTrendingMovies( { trendingMovies: [], isLoadingTrending: false, errorTrending: error } ) )
    }

  }

  getMoviesTrending();

};