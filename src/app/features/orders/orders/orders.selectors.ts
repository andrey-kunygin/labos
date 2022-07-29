import { OrderState } from './orders.model';
import { createSelector } from '@ngrx/store';
import { ordersState } from './orders.state';

export const selectOrdersDataValue = createSelector(
  ordersState,
  (state: OrderState) => state.ordersList
);

export const selectOrdersListLoading = createSelector(
  selectOrdersDataValue,
  (state) => state?.loading ?? false
);
export const selectOrdersListData = createSelector(
  selectOrdersDataValue,
  (state) => state?.data || []
);
export const selectOrdersListError = createSelector(
  selectOrdersDataValue,
  (state) => state?.error ?? false
);
