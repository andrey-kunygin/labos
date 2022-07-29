import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models';

interface PatientResponse {
  patient?: Patient[];
}

@Injectable()
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<PatientResponse> {
    return this.http.get<PatientResponse>('https://api.mocki.io/v2/51597ef3');
  }
}
