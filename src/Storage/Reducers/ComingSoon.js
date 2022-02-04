import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listMovies: [],
  isLoading: false,
  error: null
}

export const ComingSoon = createSlice({
  name: 'ComingSoon',
  initialState,
  reducers: {
    insertMovies: (state, action) => {
      const { list, isLoading, error } = action.payload
      state.listMovies = list;
      state.isLoading = isLoading;
      state.error = error
    }
  },
})

// Action creators are generated for each case reducer function
export const { insertMovies } = ComingSoon.actions

export default ComingSoon.reducer