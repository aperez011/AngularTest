import { Component, OnInit } from '@angular/core';
import { TableStructure } from '../../model/TableStructure';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: TableStructure[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'email', 'direccion'];

  // dataSource = ELEMENT_DATA;

  contacts = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "telefono": "123456789",
      "email": "juan@example.com",
      "direccion": "Calle Principal 123"
    },
    {
      "nombre": "María",
      "apellido": "González",
      "telefono": "987654321",
      "email": "maria@example.com",
      "direccion": "Avenida Central 456"
    },
    {
      "nombre": "Pedro",
      "apellido": "Sánchez",
      "telefono": "555555555",
      "email": "pedro@example.com",
      "direccion": "Plaza Mayor 789"
    },
    {
      "nombre": "Laura",
      "apellido": "López",
      "telefono": "999999999",
      "email": "laura@example.com",
      "direccion": "Calle Secundaria 321"
    },
    {
      "nombre": "Carlos",
      "apellido": "Martínez",
      "telefono": "444444444",
      "email": "carlos@example.com",
      "direccion": "Paseo del Sol 567"
    },
    {
      "nombre": "Ana",
      "apellido": "Rodríguez",
      "telefono": "777777777",
      "email": "ana@example.com",
      "direccion": "Avenida Norte 890"
    },
    {
      "nombre": "Luis",
      "apellido": "Hernández",
      "telefono": "222222222",
      "email": "luis@example.com",
      "direccion": "Calle Sur 654"
    },
    {
      "nombre": "Isabel",
      "apellido": "Lara",
      "telefono": "666666666",
      "email": "isabel@example.com",
      "direccion": "Ruta Este 987"
    },
    {
      "nombre": "Miguel",
      "apellido": "Díaz",
      "telefono": "888888888",
      "email": "miguel@example.com",
      "direccion": "Avenida Oeste 234"
    },
    {
      "nombre": "Elena",
      "apellido": "Fernández",
      "telefono": "111111111",
      "email": "elena@example.com",
      "direccion": "Carretera Central 567"
    }
  ];

  dataSource: MatTableDataSource<any>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.contacts);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}