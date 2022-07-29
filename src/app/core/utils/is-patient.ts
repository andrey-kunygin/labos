import { nameOf } from './name-of';
import { Order, Patient } from '../../shared/models';

export const isPatient = (entity: Patient | Order): entity is Patient =>
  nameOf<Patient>('firstName') in entity;
