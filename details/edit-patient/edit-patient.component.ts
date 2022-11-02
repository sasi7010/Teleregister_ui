import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  patientform: FormGroup
  constructor(private fb: FormBuilder, private service: DetailService,@Inject(MAT_DIALOG_DATA) private _data: any) {
    this.patientform = this.fb.group({
      'firstName': [this._data.d.firstName],
      'lastName': [this._data.d.lastName],
      'email': [this._data.d.email],
      'phoneNumber': [this._data.d.phoneNumber],
      'dob': [this._data.d.dob],
      'gender': [this._data.d.gender],
      'id':[this._data.d.id]
    })
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.patientform.value)
    this.service.put_patient(this.patientform.value)
    .subscribe((res)=>{
      alert("Patient Updated Sucessfull");
    })
  }



}
