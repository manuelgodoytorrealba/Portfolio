import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  links = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-perfil', subtitle: 'Perfil profesional actualizado' },
    { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba', subtitle: 'Repos y proyectos públicos' },
    { label: 'Email', url: 'mailto:tuemail@correo.com', subtitle: 'Contacto directo' },
  ];
}