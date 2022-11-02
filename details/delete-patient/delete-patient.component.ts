import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  constructor(private service: DetailService,@Inject(MAT_DIALOG_DATA) private _data: any) { }

  ngOnInit(): void {
  }

  delete(){
    this.service.delete_patient(this._data.d.id)
    .subscribe(() => {
      alert("deleted successfully");  
    })
  }

}
