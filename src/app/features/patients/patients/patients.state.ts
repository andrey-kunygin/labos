import { createFeatureSelector } from '@ngrx/store';
import { PatientsState } from './patients.model';

export interface AppState {
  patients: PatientsState;
}
export const patientsState = createFeatureSelector<AppState, PatientsState>(
  'patients'
);
