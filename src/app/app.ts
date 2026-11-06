import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { ProyectosComponent } from './components/proyectos/proyectos';
import { SkillsComponent } from './components/skills/skills';

@Component({
  imports: [HeaderComponent, ProyectosComponent, SkillsComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
