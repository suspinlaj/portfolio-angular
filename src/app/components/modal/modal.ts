import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  public dataService = inject(DataService);
  
  // Variables locales del carrusel
  indiceCarrusel = 0;
  intervaloCarrusel: any;

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.dataService.videoAbierto()) {
      this.dataService.cerrarVideo();
    } else if (this.dataService.zoomAbierto()) {
      this.dataService.cerrarZoom();
    } else if (this.dataService.proyectoSeleccionado()) {
      this.dataService.cerrarModalPrincipal();
    }
  }

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    this.detenerAutoplay();
  }

  // --- LOGICA DEL COVERFLOW 3D ---
  
  getEstiloCoverflow(index: number, orientacion: string) {
    const proyecto = this.dataService.proyectoSeleccionado();
    if (!proyecto) return null;

    const totalSlides = proyecto.capturas.length;
    const diferencia = index - this.indiceCarrusel;
    const direccion = Math.sign(diferencia);
    const absDiferencia = Math.abs(diferencia);

    let transformacion = `translate(-50%, -50%) `;
    let zIndex = 50;
    let opacity = 1;
    let filter = 'brightness(1)';

    if (diferencia === 0) {
      transformacion += `translateX(0px) scale(1.1) rotateY(0deg)`;
    } else {
      const empujeBase = orientacion === "horizontal" ? 170 : 100;
      const pushX = direccion * (empujeBase + (absDiferencia * 40));
      const giroY = direccion * -45;
      const escala = Math.max(0.5, 1 - (absDiferencia * 0.2));

      transformacion += `translateX(${pushX}px) scale(${escala}) rotateY(${giroY}deg)`;
      zIndex = 50 - absDiferencia;
      opacity = Math.max(0, 1 - (absDiferencia * 0.3));
      filter = 'brightness(0.4)';
    }

    return { transform: transformacion, zIndex, opacity, filter };
  }

  clickEnSlide(index: number, imgUrl: string, proyecto: any) {
    if (this.indiceCarrusel === index) {
      this.dataService.abrirZoom(proyecto.capturas, index, proyecto.color);
      this.detenerAutoplay();
    } else {
      this.indiceCarrusel = index;
      this.reiniciarAutoplay();
    }
  }

  avanzarCarrusel() {
    const proyecto = this.dataService.proyectoSeleccionado();
    if (proyecto) {
      this.indiceCarrusel = (this.indiceCarrusel === proyecto.capturas.length - 1) ? 0 : this.indiceCarrusel + 1;
      this.reiniciarAutoplay();
    }
  }

  retrocederCarrusel() {
    const proyecto = this.dataService.proyectoSeleccionado();
    if (proyecto) {
      this.indiceCarrusel = (this.indiceCarrusel === 0) ? proyecto.capturas.length - 1 : this.indiceCarrusel - 1;
      this.reiniciarAutoplay();
    }
  }

  iniciarAutoplay() {
    this.intervaloCarrusel = setInterval(() => {
      if (this.dataService.proyectoSeleccionado() && !this.dataService.zoomAbierto() && !this.dataService.videoAbierto()) {
        this.avanzarCarrusel();
      }
    }, 3000);
  }

  detenerAutoplay() {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
  }

  reiniciarAutoplay() {
    this.detenerAutoplay();
    this.iniciarAutoplay();
  }
}