import { DataValue, Patient } from '../../../shared/models';

export interface PatientsState {
  patientsList: DataValue<Patient[]> | undefined;
}
