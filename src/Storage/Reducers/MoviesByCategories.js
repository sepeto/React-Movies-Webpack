import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  currentCategory: ''
}

export const MoviesByCategories = createSlice({
  name: 'MoviesByCategories',
  initialState,
  reducers: {
    insertMoviesByCategories: (state, action) => {
      const { movies: listMovie, isLoading, error } = action.payload
      state.movies = listMovie || state.movies;
      state.isLoading = isLoading;
      state.error = error;
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
      localStorage.setItem('currentCategory', action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { insertMoviesByCategories, updateCurrentCategory } = MoviesByCategories.actions

export default MoviesByCategories.reducer