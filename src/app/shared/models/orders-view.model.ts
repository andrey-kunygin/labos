import { Order } from './order.model';

export interface OrderView extends Order {
  isFavorite: boolean;
}
