import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {

  categorias = [
    {
      nombre: 'Back-end',
      techs: ['Java', 'C#', '.NET', 'Spring Boot', 'PHP', 'Python']
    },
    {
      nombre: 'Front-end',
      techs: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      nombre: 'Bases de datos',
      techs: ['PostgreSQL', 'MySQL', 'DbVisualizer']
    },
    {
      nombre: 'Herramientas',
      techs: ['Git', 'Docker', 'Azure', 'Unity', 'JIRA', 'Maven', 'Tomcat']
    },
    {
      nombre: 'Metodologías',
      techs: ['Scrum', 'Principios SOLID', 'Trabajo en equipo']
    },
    {
      nombre: 'Idiomas',
      techs: ['Español (Nativo)', 'Inglés (B1-B2)', 'Francés (Básico)']
    }
  ];
}