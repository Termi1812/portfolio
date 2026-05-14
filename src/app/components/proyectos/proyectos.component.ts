import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos = [
    {
      icono: '⚽',
      nombre: 'LaLiga App',
      descripcion: 'Aplicación web full stack para seguir LaLiga EA Sports en tiempo real. Clasificación, partidos y fichas de equipos con datos sincronizados automáticamente cada día.',
      techs: ['Angular', 'Spring Boot', 'PostgreSQL', 'Railway'],
      url: 'https://laliga-app-production.up.railway.app'
    },
    {
      icono: '🏥',
      nombre: 'App RV Hospitalaria CHN',
      descripcion: 'Aplicación de realidad virtual para orientación hospitalaria en el Complejo Hospitalario de Navarra, ayudando a pacientes y personal a orientarse y agilizar la atención.',
      techs: ['Unity', 'C#', '.NET'],
      url: null
    },
    {
      icono: '💳',
      nombre: 'Herramienta pagos automáticos',
      descripcion: 'Sistema para automatizar pagos a mediadores en Helvetia Seguros, reduciendo un 60% el tiempo de procesamiento manual en el área de contabilidad.',
      techs: ['Java', 'Spring Boot', 'Maven', 'JUnit'],
      url: null
    },
    {
      icono: '🎮',
      nombre: 'Videojuego educativo',
      descripcion: 'Videojuego educativo desarrollado para el instituto Esclavas del Sagrado Corazón en Pamplona, como parte del departamento de I+D de iAR.',
      techs: ['Unity', 'C#', '.NET'],
      url: null
    }
  ];
}