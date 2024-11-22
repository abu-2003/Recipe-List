import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export default store;
