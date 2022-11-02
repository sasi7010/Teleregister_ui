import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailService } from 'src/app/detail.service';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { LogoutComponent } from 'src/app/logout/logout.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data: any;
  constructor(public dialog: MatDialog, private service: DetailService) {
    this.dataSource.data = this.PeriodicElement;
  }

  PeriodicElement = [
    { position: 1, PatientID: '', PatientName: '', Dateofregister: '', Action: '' },
  ];

  

  displayedColumns: string[] = ['position', 'Patient ID', 'Patient Name', 'Date of Register', 'Action'];
  dataSource = new MatTableDataSource();


  ngOnInit(): void {
    this.get_patient();
    this.get_doctor();
  }

  add() {
    const dialogRef = this.dialog.open(AddPatientComponent,
      {
        height: '80%',
        width: '40%',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get_patient();
    });
  }

  doct() {
    const dialogRef = this.dialog.open(DoctorDetailsComponent,
      {
        height: '80%',
        width: '40%',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get_doctor();
    });
  }

  edit(d: any) {
    const dialogRef = this.dialog.open(EditPatientComponent,
      {
        height: '80%',
        width: '40%',
        data: { d },
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get_patient();
    });
  }

  delete(d: any) {
    const dialogRef = this.dialog.open(DeletePatientComponent,
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
      this.get_patient();
    });
  }

  get_patient() {
    this.service.get_patient()
      .subscribe((data) => {
        this.data = data
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(data)
      })
  }

  get_doctor() {
    this.service.get_doctor()
      .subscribe((data) => {
        this.data = data;
      })
}

  logout(){
    const dialogRef = this.dialog.open(LogoutComponent,
      {
        width: "100%",
        maxWidth: "400px",
        height: "auto",
        hasBackdrop: true,
        maxHeight: "700px",
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
