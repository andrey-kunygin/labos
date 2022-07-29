import { combineLatest } from 'rxjs';
import {
  selectPatientsListData,
  selectPatientsListError,
  selectPatientsListLoading,
} from './patients.selectors';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { getPatients } from './patients.actions';
import { map } from 'rxjs/operators';
import { favoriteActions, favoriteSelectors } from '../../../core';
import { PatientView } from '../../../shared/models';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  readonly routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  model$: Observable<{
    list: PatientView[];
    loading: boolean;
    error: boolean;
  }>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = combineLatest([
      combineLatest([
        this.store.pipe(select(selectPatientsListData)),
        this.store.pipe(select(favoriteSelectors.selectFavoritesPatients)),
      ]).pipe(
        map(([patients, favoritePatients]) =>
          patients?.map(
            (patient) =>
              ({
                ...patient,
                isFavorite: !!favoritePatients?.some(
                  (f) => f.defaultId === patient.defaultId
                ),
              } as PatientView)
          )
        )
      ),
      this.store.pipe(select(selectPatientsListLoading)),
      this.store.pipe(select(selectPatientsListError)),
    ]).pipe(map(([list, loading, error]) => ({ list, loading, error })));
  }

  loadPatients(): void {
    this.store.dispatch(getPatients());
  }

  onAddToFavorite(patient: PatientView): void {
    this.store.dispatch(favoriteActions.addPatientToFavorite({ patient }));
  }

  onRemoveFromFavorite({ defaultId: id }: PatientView): void {
    this.store.dispatch(favoriteActions.removePatientFromFavorite({ id }));
  }
}
