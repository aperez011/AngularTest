import { Component, OnInit } from '@angular/core';
import { TableStructure } from '../../model/TableStructure';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateContactComponent } from './create-update-contact/create-update-contact.component';

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

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'email', 'direccion', 'acciones'];

  // dataSource = ELEMENT_DATA;

  contacts = [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Pérez",
      "telefono": "123456789",
      "email": "juan@example.com",
      "direccion": "Calle Principal 123"
    },
    {
      "id": 2,
      "nombre": "María",
      "apellido": "González",
      "telefono": "987654321",
      "email": "maria@example.com",
      "direccion": "Avenida Central 456"
    },
    {
      "id": 3,
      "nombre": "Pedro",
      "apellido": "Sánchez",
      "telefono": "555555555",
      "email": "pedro@example.com",
      "direccion": "Plaza Mayor 789"
    },

  ];

  dataSource: MatTableDataSource<any>;

  constructor(
    private dialog: MatDialog
  ) {

    this.dataSource = new MatTableDataSource(this.contacts);

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  setDatasource() {

    this.dataSource = new MatTableDataSource(this.contacts);
  }

  eliminarContacto(contact: any) {

    this.contacts = this.contacts.filter(x => x.id != contact.id);

    this.setDatasource();
  }

  openModal(contacto: any = null) {
    let ref = this.dialog.open(CreateUpdateContactComponent,
      {
        width: '50%',
        data: contacto
      });

    ref.afterClosed().subscribe(data => {

      if (data) {
        if (data.id == 0) {

          const idNuevo = this.contacts.reduce((maxId, contact) => {
            return contact.id > maxId ? contact.id : maxId;
          }, 0) + 1;

          data.id = idNuevo;
          this.contacts.push(data);
          this.setDatasource();
        } else {
          let idx = this.contacts.findIndex(x => x.id == data.id);
          this.contacts[idx] = data;

          this.setDatasource();
        }
      }
    })
  }

}