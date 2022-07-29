import { createAction, props } from '@ngrx/store';
import { Order, Patient } from '../../shared/models';

export const addPatientToFavorite = createAction(
  '[Favorites] Add Patient To Favorite',
  props<{ patient: Patient }>()
);
export const removePatientFromFavorite = createAction(
  '[Favorites] Remove Patient From Favorite',
  props<{ id: string | undefined }>()
);

export const addOrderToFavorite = createAction(
  '[Favorites] Add Order To Favorite',
  props<{ order: Order }>()
);
export const removeOrderFromFavorite = createAction(
  '[Favorites] Remove Order From Favorite',
  props<{ id: string | undefined }>()
);
