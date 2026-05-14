import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

  educacion = [
    {
      icono: '🎓',
      titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      centro: 'Centro Integrado María Ana Sanz (CEIN)',
      fecha: '2023'
    },
    {
      icono: '📚',
      titulo: 'Bachillerato en Ciencias Sociales',
      centro: 'IES Ibaialde',
      fecha: '2021'
    }
  ];
}