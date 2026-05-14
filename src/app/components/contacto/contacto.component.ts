import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contacto = [
    {
      icono: '📧',
      label: 'email',
      valor: 'aritzciriza@gmail.com',
      url: 'mailto:aritzciriza@gmail.com'
    },
    {
      icono: '💼',
      label: 'linkedin',
      valor: 'Aritz Ciriza',
      url: 'https://www.linkedin.com/in/aritz-ciriza-531518336'
    },
    {
      icono: '🐙',
      label: 'github',
      valor: 'Termi1812',
      url: 'https://github.com/Termi1812'
    },
    {
      icono: '📍',
      label: 'ubicación',
      valor: 'Pamplona, Navarra, España',
      url: 'https://maps.google.com/?q=Pamplona,Navarra'
    }
  ];
}