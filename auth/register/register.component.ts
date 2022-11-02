import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup;
  constructor(private fb:FormBuilder,private service:DetailService,private router: Router,) { 
    this.registerform=this.fb.group({
      'firstName':[''],
      'lastName':[''],
      'phoneNumber':[''],
      'email':[''],
      'password':[''],
      'confirmPassword':['']
    })
  }

  ngOnInit(): void {

  }

  reg(){
    console.log(this.registerform.value)
    this.service.post_register(this.registerform.value)
    .subscribe((res)=>{
      alert("Sucessfull");
      this.router.navigate(["/auth/login"]);
    })
   
  }


}
