import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // Conectamos el componente con tu servicio "cerebro"
  public dataService = inject(DataService);
  
  // Variable para controlar visualmente el tema
  public temaClaro = true;

  // Función para cambiar de ES a EN
  cambiarIdioma() {
    this.dataService.toggleIdioma();
  }

  // Función para cambiar el tema oscuro/claro en el body
  cambiarTema() {
    this.temaClaro = !this.temaClaro;
    if (this.temaClaro) {
      document.body.classList.remove('dark-theme'); // Asegúrate de que coincida con la clase de tu layout.css
    } else {
      document.body.classList.add('dark-theme');
    }
  }

  // Atajo para obtener textos del servicio más fácilmente en el HTML
  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}