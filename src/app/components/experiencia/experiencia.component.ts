import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  experiencias = [
    {
      empresa: 'Cysnet',
      rol: 'Desarrollador de Software',
      fecha: 'Sep 2025 – Actualidad',
      ubicacion: 'Pamplona, España',
      actual: true,
      descripcion: [
        'Integrado en el departamento de Electromedicina, dando soporte y desarrollando nuevas soluciones para la Clínica Universitaria de Navarra.',
        'Desarrollo de una aplicación de gestión de incidencias para optimizar el trabajo del personal de la CUN.'
      ],
      techs: ['Java', '.NET', 'PHP', 'Azure', 'Docker']
    },
    {
      empresa: 'Helvetia Seguros',
      rol: 'Desarrollador Full-Stack',
      fecha: 'Feb 2024 – Feb 2025',
      ubicacion: 'Pamplona, España',
      actual: false,
      descripcion: [
        'Desarrollo de aplicaciones web para clientes e integración de microservicios.',
        'Diseño e implementación de una herramienta para automatizar pagos a mediadores, reduciendo un 60% el tiempo de procesamiento.'
      ],
      techs: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'Maven', 'Git', 'JUnit']
    },
    {
      empresa: 'iAR',
      rol: 'Desarrollador Full-Stack',
      fecha: 'Feb 2023 – Oct 2023',
      ubicacion: 'Pamplona, España',
      actual: false,
      descripcion: [
        'Participación en el departamento de I+D desarrollando soluciones para instituciones educativas y sanitarias.',
        'Desarrollo de un videojuego educativo y una app de realidad virtual para el Complejo Hospitalario de Navarra.'
      ],
      techs: ['Unity', 'C#', '.NET', 'Git', 'JUnit']
    }
  ];
}