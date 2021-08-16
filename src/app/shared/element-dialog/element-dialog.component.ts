import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
    element!: PeriodicElement;

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
