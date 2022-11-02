import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  doctorform: FormGroup
  constructor(private fb: FormBuilder, private service: DetailService,) {
    this.doctorform = this.fb.group({
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
    console.log(this.doctorform.value)
    this.service.post_doctor(this.doctorform.value)
    .subscribe((res)=>{
      alert("Doctor registered Sucessfull");
    })
  }

}
