import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  public dataService = inject(DataService);

  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}