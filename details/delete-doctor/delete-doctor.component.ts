import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit {

  constructor(private service: DetailService,@Inject(MAT_DIALOG_DATA) private _data: any) { }

  ngOnInit(): void {
  }

  delete(){
    this.service.delete(this._data.d.id)
    .subscribe(() => {
      alert("deleted successfully");  
    })
  }

}
