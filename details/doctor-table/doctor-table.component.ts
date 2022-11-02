import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailService } from 'src/app/detail.service';
import { DeleteDoctorComponent } from '../delete-doctor/delete-doctor.component';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.scss']
})
export class DoctorTableComponent implements OnInit {
  data:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: DetailService,public dialog: MatDialog,) {
    this.dataSource.data = this.PeriodicElement;
   }

   PeriodicElement = [
    { position: 1, DoctorID: '', DoctorName: '', Dateofregister: '', Action: '' },
  ];

  displayedColumns: string[] = ['position', 'Doctor ID', 'Doctor Name', 'Date of Register', 'Action'];
  
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.get_doctor();
  }

  get_doctor() {
    this.service.get_doctor()
      .subscribe((data) => {
        this.data = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      })
}

edit(d:any){
  const dialogRef = this.dialog.open(EditDoctorComponent,
    {
      height: '80%',
      width: '40%',
      data: { d },
    });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.get_doctor();
  });
}

delete(d:any){
  const dialogRef = this.dialog.open(DeleteDoctorComponent,
    {
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      hasBackdrop: true,
      maxHeight: "700px",
      data: { d },
    });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.get_doctor();
  });
}

}
