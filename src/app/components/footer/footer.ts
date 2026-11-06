import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  public dataService = inject(DataService);

  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}