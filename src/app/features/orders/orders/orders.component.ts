import {
  selectOrdersListData,
  selectOrdersListLoading,
  selectOrdersListError,
} from './orders.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { OrderView } from '../../../shared/models';
import { favoriteActions, favoriteSelectors } from '../../../core';
import { map } from 'rxjs/operators';
import { getOrders } from './orders.actions';

@Component({
  selector: 'st-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  model$: Observable<{
    list: OrderView[];
    loading: boolean;
    error: boolean;
  }>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = combineLatest([
      combineLatest([
        this.store.pipe(select(selectOrdersListData)),
        this.store.pipe(select(favoriteSelectors.selectFavoriteOrders)),
      ]).pipe(
        map(([orders, favoriteOrders]) =>
          orders?.map(
            (order) =>
              ({
                ...order,
                isFavorite: !!favoriteOrders?.some(
                  (f) => f.identifier === order.identifier
                ),
              } as OrderView)
          )
        )
      ),
      this.store.pipe(select(selectOrdersListLoading)),
      this.store.pipe(select(selectOrdersListError)),
    ]).pipe(map(([list, loading, error]) => ({ list, loading, error })));
  }

  loadOrders(): void {
    this.store.dispatch(getOrders());
  }

  onAddToFavorite(order: OrderView): void {
    this.store.dispatch(favoriteActions.addOrderToFavorite({ order }));
  }

  onRemoveFromFavorite({ identifier: id }: OrderView): void {
    this.store.dispatch(favoriteActions.removeOrderFromFavorite({ id }));
  }
}
