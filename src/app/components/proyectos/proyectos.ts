import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data'; 

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosComponent {
  public dataService = inject(DataService);

  // Obtener lista de proyectos desde el servicio
  get proyectos(): any[] {
    return this.dataService.getProyectos();
  }

  // Atajo para las traducciones sueltas
  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}