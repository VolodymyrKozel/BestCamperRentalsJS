import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export const favoriteReducer = favoriteSlice.reducer;
