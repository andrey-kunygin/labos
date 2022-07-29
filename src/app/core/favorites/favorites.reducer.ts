import {
  addPatientToFavorite,
  removePatientFromFavorite,
  addOrderToFavorite,
  removeOrderFromFavorite,
} from './favorites.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { FavoritesState } from './favorites.model';

export const initialState: FavoritesState = {
  favoriteOrders: [],
  favoritePatients: [],
};

const reducer = createReducer(
  initialState,
  on(addPatientToFavorite, (state, { patient }) => ({
    ...state,
    favoritePatients: [...state.favoritePatients, patient],
  })),
  on(removePatientFromFavorite, (state, { id }) => ({
    ...state,
    favoritePatients: state.favoritePatients.filter(
      (patient) => patient.defaultId !== id
    ),
  })),
  on(addOrderToFavorite, (state, { order }) => ({
    ...state,
    favoriteOrders: [...state.favoriteOrders, order],
  })),
  on(removeOrderFromFavorite, (state, { id }) => ({
    ...state,
    favoriteOrders: state.favoriteOrders.filter(
      (order) => order.identifier !== id
    ),
  }))
);

export function favoriteReducer(
  state: FavoritesState | undefined,
  action: Action
): FavoritesState {
  return reducer(state, action);
}
