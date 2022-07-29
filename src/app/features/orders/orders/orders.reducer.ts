import { loadOrders } from './orders.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { OrderState } from './orders.model';

export const initialState: OrderState = {
  ordersList: undefined,
};

const reducer = createReducer(
  initialState,
  on(loadOrders, (state, ordersList) => ({ ...state, ordersList }))
);

export function ordersReducer(
  state: OrderState | undefined,
  action: Action
): OrderState {
  return reducer(state, action);
}
