import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {
  @Output() tituloEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  redirectToHome() {
    const titulo = 'Mi título personalizado'; // Puedes usar cualquier valor aquí
    this.tituloEvent.emit(titulo);
    this.router.navigate(['/main/main', titulo]);
  }
}
