import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  model: string;
  id: number;
  placa: string;
  ano: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, model: 'Hydrogen', placa:'ABC 1234', ano: 2021},
  {id: 2, model: 'Helium', placa:'ABC 1234', ano: 2021},
  {id: 3, model: 'Lithium', placa:'ABC 1234',  ano: 2021},
  {id: 4, model: 'Beryllium', placa:'ABC 1234', ano: 2021},
  {id: 5, model: 'Boron', placa:'ABC 1234', ano: 2020},
  {id: 6, model: 'Carbon', placa:'ABC 1234', ano: 2019},
  {id: 7, model: 'Nitrogen', placa:'ABC 1234', ano: 2017},
  {id: 8, model: 'Oxygen', placa:'ABC 1234', ano: 2015},
  {id: 9, model: 'Fluorine', placa:'ABC 1234', ano: 2019},
  {id: 10, model: 'Neon', placa:'ABC 1234', ano: 2010},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'model', 'placa', 'ano', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
