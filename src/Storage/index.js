import { configureStore } from '@reduxjs/toolkit';
import Categories from './Reducers/Categories.js';
import MoviesByCategories from './Reducers/MoviesByCategories.js';
import MoviesByRating from './Reducers/MoviesByRating.js';
import TrendingMovies from './Reducers/Trending.js';
import ComingSoon from './Reducers/ComingSoon.js';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    listCategories: Categories,
    moviesByCategory: MoviesByCategories,
    moviesByRating: MoviesByRating,
    trendingMovies: TrendingMovies,
    comingSoon: ComingSoon,
  },

})