import { DataValue, Order } from '../../../shared/models';

export interface OrderState {
  ordersList: DataValue<Order[]> | undefined;
}
