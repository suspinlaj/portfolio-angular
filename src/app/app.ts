import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { ProyectosComponent } from './components/proyectos/proyectos';
import { SkillsComponent } from './components/skills/skills';
import { SobremiComponent } from './components/sobremi/sobremi';
import { FooterComponent } from './components/footer/footer';
import { ContactoComponent } from './components/contacto/contacto';
import { ModalComponent } from './components/modal/modal';

@Component({
  imports: [HeaderComponent, ProyectosComponent, SkillsComponent, SobremiComponent, FooterComponent, ContactoComponent,
    ModalComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
