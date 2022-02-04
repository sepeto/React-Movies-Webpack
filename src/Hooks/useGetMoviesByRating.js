import axios from "axios";

import { useDispatch } from "react-redux";
import { insertMoviesByRating } from "../Storage/Reducers/MoviesByRating.js";

import config from "../config.js"

export const useGetMoviesByRating = () => {

  const dispatch = useDispatch()

  const getMoviesByRating = async () => {
    
    dispatch( insertMoviesByRating({ moviesByRating: [], isLoadingRating: true, errorRating: null }) )
    try {
      const { data } = await axios.get(`${config.BASE_URL}discover/movie?api_key=${config.API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`)

      dispatch( insertMoviesByRating({ moviesByRating: data.results, isLoadingRating: false, errorRating: null }) )
      
    } catch (error) {
      dispatch( insertMoviesByRating({ moviesByRating: [], isLoadingRating: false, errorRating: error }) )
    }
  }


  return [ getMoviesByRating ]
};