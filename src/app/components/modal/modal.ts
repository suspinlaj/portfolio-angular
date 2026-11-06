import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent {
  public dataService = inject(DataService);
}