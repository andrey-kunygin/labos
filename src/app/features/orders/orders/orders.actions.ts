import { createAction, props } from '@ngrx/store';
import { DataValue, Order } from '../../../shared/models';

export const getOrders = createAction('[Orders] Get Orders');
export const loadOrders = createAction(
  '[Orders] Load Orders',
  props<DataValue<Order[]>>()
);
