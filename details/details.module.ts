import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { SharedModule } from '../shared/shared.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { DoctorTableComponent } from './doctor-table/doctor-table.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    PatientDetailsComponent,
    DoctorDetailsComponent,
    AddPatientComponent,
    EditPatientComponent,
    EditDoctorComponent,
    DeletePatientComponent,
    DeleteDoctorComponent,
    DoctorTableComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
  ]
})
export class DetailsModule { }
