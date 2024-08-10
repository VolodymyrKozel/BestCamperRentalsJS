import { createSelector } from '@reduxjs/toolkit';
export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectHasMore = state => state.campers.hasMore;

// Selector to get a specific camper by ID
export const selectCamperById = id =>
  createSelector([selectCampers], campers =>
    campers.find(camper => camper._id === id)
  );
