import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { ProyectosComponent } from './components/proyectos/proyectos';

@Component({
  imports: [HeaderComponent, ProyectosComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
