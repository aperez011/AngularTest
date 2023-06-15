import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {
  @Output() tituloEvent = new EventEmitter<string>();

  titulo: string = 'Mi título personalizado';
  constructor(private router: Router) {}

  redirectToHome() {
    this.tituloEvent.emit(this.titulo);
    this.router.navigate(['/main/main', this.titulo]);
  }
}
