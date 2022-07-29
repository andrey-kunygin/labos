import { createFeatureSelector } from '@ngrx/store';
import { OrderState } from './orders.model';

export interface AppState {
  orders: OrderState;
}
export const ordersState = createFeatureSelector<AppState, OrderState>(
  'orders'
);
