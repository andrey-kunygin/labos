import { PatientsState } from './patients.model';
import { createSelector } from '@ngrx/store';
import { patientsState } from './patients.state';

export const selectPatientsDataValue = createSelector(
  patientsState,
  (state: PatientsState) => state.patientsList
);

export const selectPatientsListLoading = createSelector(
  selectPatientsDataValue,
  (state) => state?.loading ?? false
);
export const selectPatientsListData = createSelector(
  selectPatientsDataValue,
  (state) => state?.data || []
);
export const selectPatientsListError = createSelector(
  selectPatientsDataValue,
  (state) => state?.error ?? false
);
