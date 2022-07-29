import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients/patients.component";
import { StoreModule } from '@ngrx/store';
import { patientsReducer } from './patients/patients.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PatientsEffects } from './patients/patients.effects';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    StoreModule.forFeature('patients', patientsReducer),
    EffectsModule.forFeature([PatientsEffects]),
    CommonModule,
    SharedModule,
    PatientsRoutingModule,
  ],
  providers: [],
})
export class PatientsModule {}
