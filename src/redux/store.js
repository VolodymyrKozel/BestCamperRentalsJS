import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./tasksSlice";
import { favoriteReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorite: favoriteReducer,
  },
});
