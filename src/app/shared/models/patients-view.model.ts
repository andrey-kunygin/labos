import { Patient } from './patient.model';

export interface PatientView extends Patient {
  isFavorite: boolean;
}
