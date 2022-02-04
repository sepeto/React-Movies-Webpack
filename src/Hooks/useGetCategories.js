import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { insert } from '../Storage/Reducers/Categories.js';
import config from '../config.js'

export const useGetCategories = () => {

  const dispatch = useDispatch();

  const getCategories = async () => {
    dispatch( insert({ list: [], isLoading: true, error: null}) )

    try {
      const { data } = await axios.get(`${config.BASE_URL}genre/movie/list?api_key=${config.API_KEY}`)

      dispatch( insert({ list: data.genres, isLoading: false, error: null}) )
    } catch (error) {

      dispatch( insert({ list: [], isLoading: false, error: error}) )

    }
  }

  useEffect(() => {
    getCategories();
  },[])
};

