import { createAction, props } from '@ngrx/store';
import { DataValue, Patient } from '../../../shared/models';

export const getPatients = createAction('[Patients] Get Patients');
export const loadPatients = createAction(
  '[Patients] Load Patients',
  props<DataValue<Patient[]>>()
);
