import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trendingMovies: [],
  isLoadingTrending: false,
  errorTrending: null,
}

export const TrendingMovies = createSlice({
  name: 'TrendingMovies',
  initialState,
  reducers: {
    insertTrendingMovies: (state, action) => {
      const { trendingMovies, isLoadingTrending, errorTrending } = action.payload
      state.trendingMovies = trendingMovies;
      state.isLoadingTrending = isLoadingTrending;
      state.errorTrending = errorTrending;
    }
  },
})

// Action creators are generated for each case reducer function
export const { insertTrendingMovies } = TrendingMovies.actions

export default TrendingMovies.reducer