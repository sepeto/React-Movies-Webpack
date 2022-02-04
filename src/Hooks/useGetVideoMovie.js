import { useState, useEffect } from 'react';
import axios from 'axios';

import config from '../config.js';

export const useGetVideoMovie = (id) => {

  const [ video, setVideo ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const getVideoMovie = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.get(`${config.BASE_URL}movie/${id}/videos?api_key=${config.API_KEY}&language=en-US`)

        const trailer = data.results.filter(video => video.type === 'Trailer')
        const teaser = data.results.filter(video => video.type === 'Teaser')
        console.log(data)
        setVideo({ heroTrailer: trailer[0], trailer: trailer.slice(1), teaset: teaser});

      } catch (error) {
        setError(error);
      }
      setIsLoading(false)
  };

  useEffect( () => {
    getVideoMovie()
  }, [])


  return [ video, isLoading, error ];

};