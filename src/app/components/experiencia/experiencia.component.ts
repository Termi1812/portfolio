import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  constructor(public idiomaService: IdiomaService) {}

  experiencias = [
    {
      empresa: 'Cysnet',
      rol: 'Desarrollador de Software',
      rolEn: 'Software Developer',
      fecha: 'Sep 2025 – Actualidad',
      fechaEn: 'Sep 2025 – Present',
      ubicacion: 'Pamplona, España',
      actual: true,
      descripcion: [
        'Integrado en el departamento de Electromedicina, dando soporte y desarrollando nuevas soluciones para la Clínica Universitaria de Navarra.',
        'Desarrollo de una aplicación de gestión de incidencias para optimizar el trabajo del personal de la CUN.'
      ],
      descripcionEn: [
        'Integrated in the Electromedicine department, providing support and developing new solutions for the University Clinic of Navarra.',
        'Development of an incident management application to optimize the work of CUN staff.'
      ],
      techs: ['Java', '.NET', 'PHP', 'Azure', 'Docker']
    },
    {
      empresa: 'Helvetia Seguros',
      rol: 'Desarrollador Full-Stack',
      rolEn: 'Full-Stack Developer',
      fecha: 'Feb 2024 – Feb 2025',
      fechaEn: 'Feb 2024 – Feb 2025',
      ubicacion: 'Pamplona, España',
      actual: false,
      descripcion: [
        'Desarrollo de aplicaciones web para clientes e integración de microservicios.',
        'Diseño e implementación de una herramienta para automatizar pagos a mediadores, reduciendo un 60% el tiempo de procesamiento.'
      ],
      descripcionEn: [
        'Development of web applications for clients and microservices integration.',
        'Design and implementation of a tool to automate payments to brokers, reducing processing time by 60%.'
      ],
      techs: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'Maven', 'Git', 'JUnit']
    },
    {
      empresa: 'iAR',
      rol: 'Desarrollador Full-Stack',
      rolEn: 'Full-Stack Developer',
      fecha: 'Feb 2023 – Oct 2023',
      fechaEn: 'Feb 2023 – Oct 2023',
      ubicacion: 'Pamplona, España',
      actual: false,
      descripcion: [
        'Participación en el departamento de I+D desarrollando soluciones para instituciones educativas y sanitarias.',
        'Desarrollo de un videojuego educativo y una app de realidad virtual para el Complejo Hospitalario de Navarra.'
      ],
      descripcionEn: [
        'Participation in the R&D department developing solutions for educational and healthcare institutions.',
        'Development of an educational video game and a virtual reality app for the Navarra Hospital Complex.'
      ],
      techs: ['Unity', 'C#', '.NET', 'Git', 'JUnit']
    }
  ];
}