import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  constructor(public idiomaService: IdiomaService) {}

  categorias = [
    {
      nombre: 'Back-end',
      nombreEn: 'Back-end',
      techs: ['Java', 'C#', '.NET', 'Spring Boot', 'PHP', 'Python'],
      techsEn: ['Java', 'C#', '.NET', 'Spring Boot', 'PHP', 'Python']
    },
    {
      nombre: 'Front-end',
      nombreEn: 'Front-end',
      techs: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      techsEn: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      nombre: 'Bases de datos',
      nombreEn: 'Databases',
      techs: ['PostgreSQL', 'MySQL', 'DbVisualizer'],
      techsEn: ['PostgreSQL', 'MySQL', 'DbVisualizer']
    },
    {
      nombre: 'Herramientas',
      nombreEn: 'Tools',
      techs: ['Git', 'Docker', 'Azure', 'Unity', 'JIRA', 'Maven', 'Tomcat'],
      techsEn: ['Git', 'Docker', 'Azure', 'Unity', 'JIRA', 'Maven', 'Tomcat']
    },
    {
      nombre: 'Metodologías',
      nombreEn: 'Methodologies',
      techs: ['Scrum', 'Principios SOLID', 'Trabajo en equipo'],
      techsEn: ['Scrum', 'SOLID Principles', 'Teamwork']
    },
    {
      nombre: 'Idiomas',
      nombreEn: 'Languages',
      techs: ['Español (Nativo)', 'Inglés (B1-B2)', 'Francés (Básico)'],
      techsEn: ['Spanish (Native)', 'English (B1-B2)', 'French (Basic)']
    }
  ];
}