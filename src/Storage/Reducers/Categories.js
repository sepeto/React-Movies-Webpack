import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoading: false,
  error: null
}

export const Categories = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    insert: (state, action) => {

      // action.type; Categories
      // action.payload;

      const { list, isLoading, error } = action.payload;
      state.list = list;
      state.isLoading = isLoading;
      state.error = error
    }
  },
})

// Action creators are generated for each case reducer function
export const { insert } = Categories.actions

export default Categories.reducer