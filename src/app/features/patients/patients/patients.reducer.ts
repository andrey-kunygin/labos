import { loadPatients } from './patients.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { PatientsState } from './patients.model';

export const initialState: PatientsState = {
  patientsList: undefined,
};

const reducer = createReducer(
  initialState,
  on(loadPatients, (state, patientsList) => ({ ...state, patientsList }))
);

export function patientsReducer(
  state: PatientsState | undefined,
  action: Action
): PatientsState {
  return reducer(state, action);
}
