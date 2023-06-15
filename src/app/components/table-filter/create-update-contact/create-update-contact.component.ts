import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-update-contact',
  templateUrl: './create-update-contact.component.html',
  styleUrls: ['./create-update-contact.component.css']
})
export class CreateUpdateContactComponent {

  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CreateUpdateContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contactForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
    });

    if(data && data.id > 0)
      this.setFormData(data);
  }

  setFormData(item: any) {
    this.contactForm = this.fb.group({
      id: [item.id],
      nombre: [item.nombre, Validators.required],
      apellido: [item.apellido, Validators.required],
      telefono: [item.telefono, Validators.required],
      email: [item.email, Validators.required],
      direccion: [item.direccion, Validators.required],
    })
  }

  guardar() {
    this.dialogRef.close(this.contactForm.value);
  }

}
