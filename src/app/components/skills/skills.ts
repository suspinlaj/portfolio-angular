import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  public dataService = inject(DataService);

  getTexto(clave: string): string {
    return this.dataService.getTexto(clave);
  }
}