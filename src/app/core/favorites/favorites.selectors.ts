import { createSelector } from '@ngrx/store';
import { favoritesSelectors } from '../core.state';
export const selectFavoritesPatients = createSelector(
  favoritesSelectors,
  (state) => state?.favoritePatients
);

export const selectFavoriteOrders = createSelector(
  favoritesSelectors,
  (state) => state?.favoriteOrders
);
