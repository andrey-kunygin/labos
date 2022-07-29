import { Order, Patient } from '../../shared/models';

export interface FavoritesState {
  favoritePatients: Patient[];
  favoriteOrders: Order[];
}
