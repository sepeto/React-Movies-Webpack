import {useState} from 'react';
import axios from 'axios';

import config from '../config.js';

export const useGetSingleMovie = () => {

  const [movieDetails, setMovieDetails] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const getSingleMovie = async (id) => {

    setIsLoading(true);
    try {
      const { data } = await axios.get(`${config.BASE_URL}movie/${id}?api_key=${config.API_KEY}`);
      setMovieDetails(data);
    } catch (error) {
      setError(error)
    }
    setIsLoading(false);
  };

  return [ getSingleMovie, movieDetails, isLoading, error]

}