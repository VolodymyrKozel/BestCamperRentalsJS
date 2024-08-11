import { createSelector } from '@reduxjs/toolkit';
export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectHasMore = state => state.campers.hasMore;
export const selectPage = state => state.campers.page;

export const selectCamperById = id =>
  createSelector([selectCampers], campers =>
    campers.find(camper => camper._id === id)
  );
