import axios from "axios";

import { useDispatch } from "react-redux";
import { insertMovies } from "../Storage/Reducers/ComingSoon.js";

import config from "../config.js"

export const useGetComingSoonMovies = () => {

  const dispatch = useDispatch();

  const getComingSoonMovies = async () => {

    dispatch( insertMovies( { list: [], isLoading: true, error: null } ) );

    try {
      // fetch with axios 
      const { data } = await axios.get(`${config.BASE_URL}movie/upcoming?api_key=${config.API_KEY}`);
      // slice data
      const sliceListMovies = data.results.slice(0, 3);
      // set data
      dispatch( insertMovies( { list: sliceListMovies, isLoading: false, error: null } ) );
    } catch (error) {
      dispatch( insertMovies( { list: [], isLoading: false, error: error } ) );
      
    }
  }

  return [ getComingSoonMovies ]

}

