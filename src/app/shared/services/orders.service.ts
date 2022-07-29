import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models';

interface OrderResponse {
  order?: Order[];
}

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>('https://api.mocki.io/v2/79fb05cb');
  }
}
