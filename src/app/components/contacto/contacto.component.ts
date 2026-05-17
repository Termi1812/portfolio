import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(public idiomaService: IdiomaService) {}

  contacto = [
    { icono: '📧', label: 'email', labelEn: 'mail', valor: 'aritzciriza@gmail.com', url: 'mailto:aritzciriza@gmail.com' },
    { icono: '💼', label: 'linkedin', labelEn: 'linkedin', valor: 'Aritz Ciriza', url: 'https://www.linkedin.com/in/aritz-ciriza-531518336/' },
    { icono: '🐙', label: 'github', labelEn: 'github', valor: 'Termi1812', url: 'https://github.com/Termi1812' },
    { icono: '📍', label: 'ubicación', labelEn: 'location', valor: 'Pamplona, Navarra, España', url: 'https://maps.google.com/?q=Pamplona,Navarra' }
  ];
}