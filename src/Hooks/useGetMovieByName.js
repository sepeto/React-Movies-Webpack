import axios from 'axios';
import { useState } from 'react';

import config from '../config.js'

export const useGetMovieByName = () => {
  const [ movies, setMovies ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const getMovieByName = async (keyword) => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`${config.BASE_URL}search/multi?api_key=${config.API_KEY}&language=en-US&query=${keyword}&page=1`)

      const sliceListMovies = data.results.slice(0, 10);
      setMovies(sliceListMovies)
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  return [ movies, isLoading, error, getMovieByName]
}