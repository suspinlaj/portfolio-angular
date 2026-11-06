import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data'; // Ajusta la ruta si tu archivo se llama diferente

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css'] // Asegúrate de que las rutas coinciden con tus nombres de archivo
})
export class ProyectosComponent {
  public dataService = inject(DataService);

  // Obtenemos la lista de proyectos desde el servicio
  get proyectos(): any[] {
    return this.dataService.getProyectos();
  }

  // Atajo para las traducciones sueltas
  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}