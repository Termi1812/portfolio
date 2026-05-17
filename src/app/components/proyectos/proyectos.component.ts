import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  constructor(public idiomaService: IdiomaService) {}

  proyectos = [
    {
      icono: '⚽',
      nombre: 'LaLiga App',
      descripcion: 'Aplicación web full stack para seguir LaLiga EA Sports en tiempo real. Clasificación, partidos y fichas de equipos con datos sincronizados automáticamente cada día.',
      descripcionEn: 'Full stack web application to follow LaLiga EA Sports in real time. Standings, matches and team profiles with data synchronized automatically every day.',
      techs: ['Angular', 'Spring Boot', 'PostgreSQL', 'Railway'],
      url: 'https://laliga-app-production.up.railway.app'
    },
    {
      icono: '🏥',
      nombre: 'App RV Hospitalaria CHN',
      descripcion: 'Aplicación de realidad virtual para orientación hospitalaria en el Complejo Hospitalario de Navarra, ayudando a pacientes y personal.',
      descripcionEn: 'Virtual reality application for hospital orientation at the Navarra Hospital Complex, helping patients and staff navigate the facilities.',
      techs: ['Unity', 'C#', '.NET'],
      url: null
    },
    {
      icono: '💳',
      nombre: 'Herramienta pagos automáticos',
      descripcion: 'Sistema para automatizar pagos a mediadores en Helvetia Seguros, reduciendo un 60% el tiempo de procesamiento manual.',
      descripcionEn: 'System to automate broker payments at Helvetia Insurance, reducing manual processing time by 60%.',
      techs: ['Java', 'Spring Boot', 'Maven', 'JUnit'],
      url: null
    },
    {
      icono: '🎮',
      nombre: 'Videojuego educativo',
      descripcion: 'Videojuego educativo desarrollado para el instituto Esclavas del Sagrado Corazón en Pamplona, como parte del departamento de I+D de iAR.',
      descripcionEn: 'Educational video game developed for the Esclavas del Sagrado Corazón school in Pamplona, as part of iAR\'s R&D department.',
      techs: ['Unity', 'C#', '.NET'],
      url: null
    }
  ];
}