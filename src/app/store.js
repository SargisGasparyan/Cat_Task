import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categories/categoriesSlice';
import catsReducer from '../features/cats/catsSlices'

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cats: catsReducer
  },
});
