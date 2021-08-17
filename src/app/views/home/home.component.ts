import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';


export interface PeriodicElement {
  model: string;
  id: number;
  placa: string;
  ano: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, model: 'Golf', placa:'ABC 1234', ano: 2021},
  {id: 2, model: 'Gol', placa:'ABC 1234', ano: 2021},
  {id: 3, model: 'Celta', placa:'ABC 1234',  ano: 2021},
  {id: 4, model: 'Fox', placa:'ABC 1234', ano: 2021},
  {id: 5, model: 'Jeta', placa:'ABC 1234', ano: 2020},
  {id: 6, model: 'Onix', placa:'ABC 1234', ano: 2019},
  {id: 7, model: 'Palio', placa:'ABC 1234', ano: 2017},
  {id: 8, model: 'Parati', placa:'ABC 1234', ano: 2015},
  {id: 9, model: 'Polo', placa:'ABC 1234', ano: 2019},
  {id: 10, model: 'Fiesta', placa:'ABC 1234', ano: 2010},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'model', 'placa', 'ano', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        id: null,
        model: '',
        placa: null,
        ano: '',
       }: {
        id: element.id,
        model: element.model,
        placa: element.placa,
        ano: element.ano,
       }

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.dataSource[result.id - 1] = result;
          this.table.renderRows();
        }else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
        
      }
    });

  }

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }

  deleteElement(id: number): void {
    this.dataSource = this.dataSource.filter(p => p.id !== id);

  }

}
