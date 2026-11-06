import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  templateUrl: './sobremi.html',
  styleUrls: ['./sobremi.css']
})
export class SobremiComponent {
  public dataService = inject(DataService);

  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}