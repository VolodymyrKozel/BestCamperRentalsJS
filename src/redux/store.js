import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import { favoriteReducer } from './favorite/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorite: favoriteReducer,
  },
});
