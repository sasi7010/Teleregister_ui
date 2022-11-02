import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/detail.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;
  constructor(private fb:FormBuilder,private service:DetailService,private router: Router,) {
    this.Loginform=this.fb.group({
      'phoneNumber':[''],
      'password':['',[Validators.required, Validators.maxLength(15),Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
   }

  ngOnInit(): void {
    
  }

  login(){
    console.log(this.Loginform.value)
    this.service.login_user(this.Loginform.value)
    .subscribe((res)=>{
      if(res==true){
        this.router.navigate(["/details/patient"]);
        alert("loged Successfully")
      }
      else{
        alert("Invalid credential")
      } 
    })
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.Loginform.controls[controlName].hasError(errorName);
  }

}
