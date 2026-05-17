import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(public idiomaService: IdiomaService) {}

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}