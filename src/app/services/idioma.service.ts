import { Injectable, signal } from '@angular/core';
import { TRADUCCIONES } from '../constants/traducciones';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  idioma = signal<'es' | 'en'>('es');

  cambiarIdioma(): void {
    this.idioma.set(this.idioma() === 'es' ? 'en' : 'es');
  }

  get t(): any {
    return TRADUCCIONES[this.idioma()];
  }
}