import { getPatients, loadPatients } from './patients.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { PatientsService } from './../../../shared/services';

@Injectable()
export class PatientsEffects {
  loadPatients = createEffect(() =>
    this.actions$.pipe(
      ofType(getPatients),
      switchMap(() =>
        merge(
          of(loadPatients({ loading: true, data: undefined })),
          this.patientService.getPatients().pipe(
            map(({ patient: data }) => loadPatients({ loading: false, data })),
            catchError(() =>
              of(
                loadPatients({
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
    private patientService: PatientsService
  ) {}
}
