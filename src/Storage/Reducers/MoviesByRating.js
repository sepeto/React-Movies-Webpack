import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  moviesByRating: [],
  isLoadingRating: false,
  errorRating: null,
}

export const MoviesByRating = createSlice({
  name: 'MoviesByRating',
  initialState,
  reducers: {
    insertMoviesByRating: (state, action) => {
      const { moviesByRating, isLoadingRating, errorRating } = action.payload
      state.moviesByRating = moviesByRating;
      state.isLoadingRating = isLoadingRating;
      state.errorRating = errorRating;
    }
  },
})

// Action creators are generated for each case reducer function
export const { insertMoviesByRating } = MoviesByRating.actions

export default MoviesByRating.reducer