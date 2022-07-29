import { getOrders, loadOrders } from './orders.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { OrdersService } from './../../../shared/services';

@Injectable()
export class OrdersEffects {
  loadOrders = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrders),
      switchMap(() =>
        merge(
          of(loadOrders({ loading: true, data: undefined })),
          this.ordersService.getOrders().pipe(
            map(({ order: data }) => loadOrders({ loading: false, data })),
            catchError(() =>
              of(
                loadOrders({
                  loading: false,
                  error: true,
                  data: [],
                })
              )
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}
