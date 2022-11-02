import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  post_register(data:any){
    return this.http.post(`${environment.API_Base_URL}` + `AddRegister`, data)
  }

  login_user(data:any){
    return this.http.post(`${environment.API_Base_URL}` + `Login`, data)
  }

  post_patient(data:any){
    return this.http.post(`${environment.API_Base_URL}` + `AddPatient`, data)
  }

  post_doctor(data:any){
    return this.http.post(`${environment.API_Base_URL}` + `AddDoctor`, data)
  }

  get_patient(){
    return this.http.get(`${environment.API_Base_URL}`+`GetPatient`)
  }

  get_doctor(){
    return this.http.get(`${environment.API_Base_URL}`+`GetDoctor`)
  }

  put_patient(data:any){
    return this.http.put(`${environment.API_Base_URL}`+`UpdatePatient`,data)
  }

  put_doctor(data:any){
    return this.http.put(`${environment.API_Base_URL}`+`UpdateDoctor`,data)
  }

  delete(data:any){
    return this.http.delete(`${environment.API_Base_URL}`+`DeleteDoctor?Id=${data}`)
  }

  delete_patient(data:any){
    return this.http.delete(`${environment.API_Base_URL}`+`DeletePatient?Id=${data}`)
  }
  
}
