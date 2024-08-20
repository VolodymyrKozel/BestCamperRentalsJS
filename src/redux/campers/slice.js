import { createSlice } from '@reduxjs/toolkit';
import {
  addCamper,
  fetchCampers,
  fetchCamperById,
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
    isLoading: false,
    error: null,
    hasMore: false,
    params: {
      page: 1,
      limit: 4,
      filters: {
        type: '',
      },
    },
  },

  reducers: {
    setFilters: (state, action) => {
      state.params.filters = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data;
        /*         state.items =
          state.items.length === 0
            ? action.payload.data
            : [...state.items, ...action.payload.data];
        state.params.page += 1; */
        state.hasMore = !action.payload.isLastPage;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(addCamper.pending, handlePending)
      .addCase(addCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addCamper.rejected, handleRejected)
      .addCase(deleteCamper.pending, handlePending)
      .addCase(deleteCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteCamper.rejected, handleRejected)
      .addCase(editCamper.pending, handlePending)
      .addCase(editCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editCamper.rejected, handleRejected);
  },
});

export const { setFilters } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
