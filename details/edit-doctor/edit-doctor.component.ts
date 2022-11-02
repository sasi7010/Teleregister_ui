import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  Doctorform: FormGroup
  constructor(private fb: FormBuilder, private service: DetailService,@Inject(MAT_DIALOG_DATA) private _data: any) {
    this.Doctorform = this.fb.group({
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
    console.log(this.Doctorform.value)
    this.service.put_doctor(this.Doctorform.value)
    .subscribe((res)=>{
      alert("Doctor Updated Sucessfull");
    })
  }

}
