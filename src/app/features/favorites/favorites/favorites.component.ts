import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { favoriteActions, favoriteSelectors, utils } from '../../../core';
import { PatientView, OrderView } from '../../../shared/models';

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  readonly searchChange$ = new BehaviorSubject<string>('');
  model$: Observable<{
    patientsList: PatientView[];
    ordersList: OrderView[];
  }>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = combineLatest([
      this.store.pipe(select(favoriteSelectors.selectFavoritesPatients)),
      this.store.pipe(select(favoriteSelectors.selectFavoriteOrders)),
    ]).pipe(
      map(([patients, orders]) => ({
        patientsList: patients.map((patient) => ({
          ...patient,
          isFavorite: true,
        })),
        ordersList: orders.map((order) => ({ ...order, isFavorite: true })),
      })),
      switchMap(({ patientsList, ordersList }) =>
        this.searchChange$.pipe(
          debounceTime(200),
          map((search) => ({
            patientsList: patientsList.filter((patient) =>
              this.filterEntity(patient, search)
            ),
            ordersList: ordersList.filter((order) =>
              this.filterEntity(order, search)
            ),
          }))
        )
      )
    );
  }

  onRemoveFromFavorite(entity: PatientView | OrderView): void {
    if (utils.isPatient(entity)) {
      this.store.dispatch(
        favoriteActions.removePatientFromFavorite({
          id: entity.defaultId,
        })
      );
    } else {
      this.store.dispatch(
        favoriteActions.removeOrderFromFavorite({
          id: entity.identifier,
        })
      );
    }
  }

  private filterEntity(entity: PatientView, search: string): boolean;
  private filterEntity(entity: OrderView, search: string): boolean;
  private filterEntity(
    entity: OrderView | PatientView,
    search: string
  ): boolean {
    const searchStr = search.toLowerCase();
    if (utils.isPatient(entity)) {
      return !!(entity?.firstName as string)?.toLowerCase().includes(searchStr);
    } else {
      return !!entity.orderName?.toLowerCase().includes(searchStr);
    }
  }
}
