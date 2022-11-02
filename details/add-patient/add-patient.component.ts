import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientform: FormGroup
  constructor(private fb: FormBuilder, private service: DetailService,) {
    this.patientform = this.fb.group({
      'firstName': [''],
      'lastName': [''],
      'email': [''],
      'phoneNumber': [''],
      'dob': [''],
      'gender': [''],
    })
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.patientform.value)
    this.service.post_patient(this.patientform.value)
    .subscribe((res)=>{
      alert("Patient registered Sucessfull");
    })
  }

}
