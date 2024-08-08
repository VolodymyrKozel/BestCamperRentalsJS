import { createSlice } from '@reduxjs/toolkit';
import {
  addCamper,
  fetchCampers,
  deleteCamper,
  editCamper,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(addCamper.pending, handlePending)
      .addCase(addCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addCamper.rejected, handleRejected)
      .addCase(deleteCamper.pending, handlePending)
      .addCase(deleteCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteCamper.rejected, handleRejected)
      .addCase(editCamper.pending, handlePending)
      .addCase(editCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editCamper.rejected, handleRejected);
  },
});

export const Reducer = CampersSlice.reducer;
