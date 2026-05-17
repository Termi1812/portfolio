import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {
  constructor(public idiomaService: IdiomaService) {}

  educacion = [
    {
      icono: '🎓',
      titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      tituloEn: 'Higher Degree in Multiplatform Application Development (DAM)',
      centro: 'Centro Integrado María Ana Sanz (CEIN)',
      fecha: '2023'
    },
    {
      icono: '📚',
      titulo: 'Bachillerato en Ciencias Sociales',
      tituloEn: 'High School Diploma in Social Sciences',
      centro: 'IES Ibaialde',
      fecha: '2021'
    }
  ];
}