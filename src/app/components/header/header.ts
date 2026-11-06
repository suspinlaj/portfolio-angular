import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  public dataService = inject(DataService);

  cambiarIdioma() {
    this.dataService.toggleIdioma();
  }

  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}